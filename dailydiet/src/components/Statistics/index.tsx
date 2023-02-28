import { TouchableOpacity } from "react-native";

import {
  ArrowUpRightStyle,
  Container,
  ContainerColor,
  Content,
  StatisticPercentText,
  TextStatistic,
} from "./styles";

type ContainerColorProps = {
  color?: ContainerColor;
};

export function Statistics({ color = "primary" }: ContainerColorProps) {
  return (
    <Container color={color}>
      <TouchableOpacity>
        <ArrowUpRightStyle />
      </TouchableOpacity>
      <Content>
        <StatisticPercentText>90.86%</StatisticPercentText>
        <TextStatistic>das refeições dentro da dieta</TextStatistic>
      </Content>
    </Container>
  );
}
