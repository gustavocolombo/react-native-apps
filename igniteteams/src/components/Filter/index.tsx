import { TouchableOpacityProps } from 'react-native';

import { Container, IsActiveProps, TextStyle } from './styles';

type FilterProps = TouchableOpacityProps &
  IsActiveProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Container {...rest} isActive={isActive}>
      <TextStyle>{title}</TextStyle>
    </Container>
  );
}
