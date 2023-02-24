import { Container, TextStyle } from './styles';

type EmptyListMessageProps = {
  message: string;
};

export function EmptyList({ message }: EmptyListMessageProps) {
  return (
    <Container>
      <TextStyle>{message}</TextStyle>
    </Container>
  );
}
