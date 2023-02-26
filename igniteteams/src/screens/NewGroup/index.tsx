import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';

import { Container, Content, UsersThreeStyle } from './styles';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { createGroupStorage } from '../../storage/groups/createGroupStorage';
import { AppError } from '../../utils/AppError';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  function handleMoveToTeams() {
    navigation.navigate('teams', { group });
  }

  async function createGroup(group: string) {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Digite um nome para um grupo');
      }

      await createGroupStorage(group);
      handleMoveToTeams();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message);
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar novo grupo');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <UsersThreeStyle />
        <Highlight title="Nova turma" subtitle="crie uma turma para adicionar pessoas" />
        <Input textPlaceholder="Nome da turma" onChangeText={(e) => setGroup(e)} value={group} />
        <Button
          buttonText="Criar turma"
          style={{ marginTop: 15 }}
          onPress={() => {
            handleMoveToTeams(), createGroup(group);
          }}
        />
      </Content>
    </Container>
  );
}
