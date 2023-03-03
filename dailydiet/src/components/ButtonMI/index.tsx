import { TouchableOpacityProps } from "react-native";

import { Container, Icon, TextButton } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  iconName?: string;
  textButton: string;
};

export function ButtonMI({ iconName, textButton, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {iconName && <Icon name={iconName} />}
      <TextButton>{textButton}</TextButton>
    </Container>
  );
}
