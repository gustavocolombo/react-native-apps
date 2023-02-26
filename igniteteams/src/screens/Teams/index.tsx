import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Container, CountPlayers, Form, HeaderList } from './styles';
import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';
import { EmptyList } from '../../components/EmptyList';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { PlayerCard } from '../../components/PlayerCard';

type RouteParams = {
  group: string;
};

export function Teams() {
  const [selectedTeam, setSelectedTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  const route = useRoute();

  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input textPlaceholder="Nome da turma" />
        <ButtonIcon iconName="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          horizontal
          renderItem={({ item }) => (
            <Filter
              isActive={item === selectedTeam}
              title={item}
              onPress={() => setSelectedTeam(item)}
            />
          )}
        />
        <CountPlayers>{players.length}</CountPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => <EmptyList message="Ainda não há jogadores nesse time" />}
        renderItem={({ item }) => <PlayerCard playerName={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1, paddingBottom: 100 }}
      />
      <Button buttonText="Remover turma" type="SECONDARY" />
    </Container>
  );
}
