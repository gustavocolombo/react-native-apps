import { Container, UserStyle, TextStyle } from './styles';
import { ButtonIcon } from '../ButtonIcon';

type PlayerCardProps = {
  playerName: string;
  onRemovePlayer: () => void;
};

export function PlayerCard({ playerName, onRemovePlayer }: PlayerCardProps) {
  return (
    <Container>
      <UserStyle name="user-alt" />
      <TextStyle>{playerName}</TextStyle>
      <ButtonIcon iconName="close" type="SECONDARY" onPress={onRemovePlayer} />
    </Container>
  );
}
