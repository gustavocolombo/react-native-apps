import { Container, UserStyle, TextStyle } from './styles';
import { ButtonIcon } from '../ButtonIcon';

type PlayerCardProps = {
  playerName: string;
};

export function PlayerCard({ playerName }: PlayerCardProps) {
  return (
    <Container>
      <UserStyle name="user-alt" />
      <TextStyle>{playerName}</TextStyle>
      <ButtonIcon iconName="close" type="SECONDARY" />
    </Container>
  );
}
