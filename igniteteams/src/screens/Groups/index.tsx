import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { EmptyList } from '../../components/EmptyList';
import { GroupCard } from '../../components/GroupCard';

export function Groups() {
  const [groups, setGroups] = useState([]);

  const navigation = useNavigation();

  function handleMoveNewGroup() {
    navigation.navigate('newGroup');
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <EmptyList message="Ainda não há turmas cadastradas" />}
        renderItem={({ item }) => <GroupCard text={item} />}
      />
      <Button buttonText="Criar turma" onPress={handleMoveNewGroup} />
    </Container>
  );
}
