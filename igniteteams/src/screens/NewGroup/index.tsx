import { Button } from '@components/Button';
import { Header } from '@components/Header';

import { Container, Content, UsersThreeStyle } from './styles';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <UsersThreeStyle />
        <Highlight title="Nova turma" subtitle="crie uma turma para adicionar pessoas" />
        <Input />
        <Button buttonText="Criar turma" style={{ marginTop: 15 }} />
      </Content>
    </Container>
  );
}
