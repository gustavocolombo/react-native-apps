import { TouchableOpacityProps } from "react-native";

import { Container, Icon, TextButton } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  textButton: string;
};

export function ButtonEditMeal({ textButton, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Icon />
      <TextButton>{textButton}</TextButton>
    </Container>
  );
}
