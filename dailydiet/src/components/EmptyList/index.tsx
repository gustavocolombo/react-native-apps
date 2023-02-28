import { Container, IconEmptyList, TextEmptyList } from "./styles";

export function EmptyList() {
  return (
    <Container>
      <IconEmptyList />
      <TextEmptyList>Ainda não há refeições cadastradas</TextEmptyList>
    </Container>
  );
}
