import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { ButtonIconStyleProps, Container, Icon } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  type?: ButtonIconStyleProps;
  iconName: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ type = 'PRIMARY', iconName, ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={iconName} type={type} />
    </Container>
  );
}
