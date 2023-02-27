import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { EmptyList } from '../../components/EmptyList';
import { GroupCard } from '../../components/GroupCard';
import { getAllGroupsStorage } from '../../storage/groups/getAllGroupsStorage';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleMoveNewGroup() {
    navigation.navigate('newGroup');
  }

  async function fetchGroups() {
    try {
      const data = await getAllGroupsStorage();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(groupName: string) {
    navigation.navigate('teams', { group: groupName });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <EmptyList message="Ainda não há turmas cadastradas" />}
        renderItem={({ item }) => <GroupCard text={item} onPress={() => handleOpenGroup(item)} />}
      />
      <Button buttonText="Criar turma" onPress={handleMoveNewGroup} />
    </Container>
  );
}
