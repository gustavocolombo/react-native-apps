import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { Container, CountPlayers, Form, HeaderList } from './styles';
import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';
import { EmptyList } from '../../components/EmptyList';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { PlayerCard } from '../../components/PlayerCard';
import { removeGroupByName } from '../../storage/groups/removeGroupByName';
import { PlayerStorageDTO } from '../../storage/players/PlayerStorageDTO';
import { createPlayerStorage } from '../../storage/players/createPlayerStorage';
import { getPlayersByGroupAndTeam } from '../../storage/players/getPlayersByGroupAndTeam';
import { removePlayerByGroup } from '../../storage/players/removePlayerByGroup';
import { AppError } from '../../utils/AppError';

type RouteParams = {
  group: string;
};

export function Teams() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [playerName, setPlayerName] = useState('');

  const route = useRoute();
  const navigation = useNavigation();

  const { group } = route.params as RouteParams;

  async function fetchPlayersByTeam() {
    try {
      const players = await getPlayersByGroupAndTeam(group, team);
      setPlayers(players);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Erro', error.message);
      } else {
        Alert.alert('Não foi possível filtrar jogadores pelo time');
        console.log('erro', error);
      }
    }
  }

  async function handleAddNewPlayer() {
    if (playerName.trim().length === 0) {
      return Alert.alert('Novo jogador', 'Insira um nome para adicionar um jogador');
    }

    const newPlayer = {
      name: playerName,
      team,
    };

    try {
      await createPlayerStorage(newPlayer, group);
      setPlayerName('');
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo jogador', error.message);
      } else {
        console.log('erro', error);
        Alert.alert('Erro', 'Não foi possível adicionar novo jogador');
      }
    }
  }

  async function removePlayer(playerName: string) {
    try {
      await removePlayerByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Erro', error.message);
      } else {
        Alert.alert('Erro', 'Não foi possível remover o usuário');
        console.log('erro', error);
      }
    }
  }

  async function removeGroup(groupName: string) {
    try {
      Alert.alert('Remover', 'Deseja mesmo remover o grupo?', [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            removeGroupByName(groupName), navigation.navigate('groups');
          },
        },
      ]);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Erro', error.message);
      } else {
        Alert.alert('Erro', 'Não foi possível remover o usuário');
        console.log('erro', error);
      }
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [players]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input
          textPlaceholder="Nome do jogador"
          onChangeText={(e) => setPlayerName(e)}
          value={playerName}
        />
        <ButtonIcon iconName="add" onPress={handleAddNewPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          horizontal
          renderItem={({ item }) => (
            <Filter isActive={item === team} title={item} onPress={() => setTeam(item)} />
          )}
        />
        <CountPlayers>{players.length}</CountPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={() => <EmptyList message="Ainda não há jogadores nesse time" />}
        renderItem={({ item }) => (
          <PlayerCard playerName={item.name} onRemovePlayer={() => removePlayer(item.name)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1, paddingBottom: 100 }}
      />
      <Button buttonText="Remover turma" type="SECONDARY" onPress={() => removeGroup(group)} />
    </Container>
  );
}
