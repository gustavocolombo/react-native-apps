import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

type InputProps = TextInputProps & {
  textPlaceholder: string;
};

export function Input({ textPlaceholder, ...rest }: InputProps) {
  const { COLORS } = useTheme();
  return (
    <Container {...rest} placeholder={textPlaceholder} placeholderTextColor={COLORS.GRAY_300} />
  );
}
