import { TouchableOpacityProps } from 'react-native';

import { Container, TextStyle, UsersIcon } from './styles';

type GroupCardProps = TouchableOpacityProps & {
  text: string;
};

export function GroupCard({ text, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <UsersIcon />
      <TextStyle>{text}</TextStyle>
    </Container>
  );
}
