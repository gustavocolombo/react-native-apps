import { TouchableOpacityProps } from 'react-native';

import { ButtonStyle, ButtonTypeStyleProps, TextStyle } from './styles';

type ButtonProps = TouchableOpacityProps & {
  buttonText: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ buttonText, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <ButtonStyle type={type} {...rest}>
      <TextStyle>{buttonText}</TextStyle>
    </ButtonStyle>
  );
}
