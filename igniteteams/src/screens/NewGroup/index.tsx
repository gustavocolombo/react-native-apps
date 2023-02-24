import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, UsersThreeStyle } from './styles';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';

export function NewGroup() {
  const navigation = useNavigation();

  function handleMoveToTeams() {
    navigation.navigate('teams', { group: 'Primeiro grupo' });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <UsersThreeStyle />
        <Highlight title="Nova turma" subtitle="crie uma turma para adicionar pessoas" />
        <Input textPlaceholder="Nome da turma" />
        <Button buttonText="Criar turma" style={{ marginTop: 15 }} onPress={handleMoveToTeams} />
      </Content>
    </Container>
  );
}
