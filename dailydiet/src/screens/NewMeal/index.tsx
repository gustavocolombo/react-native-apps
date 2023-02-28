import { Text, View } from "react-native";

import {
  Container,
  ContainerForm,
  ContainerGray,
  ContainerWhite,
} from "./styles";
import { HeaderBackButton } from "../../components/HeaderBackButton";

export function NewMeal() {
  return (
    <Container>
      <ContainerGray>
        <HeaderBackButton showHeaderText="Nova refeição" />
      </ContainerGray>
      <ContainerWhite />
    </Container>
  );
}
