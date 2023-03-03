import { Text, TouchableOpacity } from "react-native";

import {
  ArrowLeftColorized,
  AverageStatisticsColor,
  Container,
  ContainerColorized,
  ContainerContentGray,
  ContainerTotalEachMeals,
  ContainerTotalHealthyMeal,
  ContainerTotalNoHealthyMeal,
  ContainerWhite,
  Content,
  StatisticPercentText,
  TextBold,
  TextStatistic,
  TextSubtitle,
  TextTitleStatistic,
} from "./styles";

type AverageStatisticsColorProps = {
  color: AverageStatisticsColor;
};

export function AverageStatistics({
  color = "red",
}: AverageStatisticsColorProps) {
  return (
    <Container color={color}>
      <ContainerColorized color={color}>
        <TouchableOpacity
          style={{ alignItems: "flex-start", alignSelf: "flex-start" }}
        >
          <ArrowLeftColorized color={color} />
        </TouchableOpacity>
        <Content>
          <StatisticPercentText>90.86%</StatisticPercentText>
          <TextStatistic>das refeições dentro da dieta</TextStatistic>
        </Content>
      </ContainerColorized>

      <ContainerWhite>
        <TextTitleStatistic>Estatísticas gerais</TextTitleStatistic>
        <ContainerContentGray>
          <TextBold>4</TextBold>
          <TextSubtitle>
            melhor sequência de pratos dentro da dieta
          </TextSubtitle>
        </ContainerContentGray>

        <ContainerContentGray>
          <TextBold>109</TextBold>
          <TextSubtitle>refeições registradas</TextSubtitle>
        </ContainerContentGray>

        <ContainerTotalEachMeals>
          <ContainerTotalHealthyMeal>
            <TextBold>32</TextBold>
            <TextSubtitle>refeições dentro da dieta</TextSubtitle>
          </ContainerTotalHealthyMeal>
          <ContainerTotalNoHealthyMeal>
            <TextBold>77</TextBold>
            <TextSubtitle>refeições fora da dieta</TextSubtitle>
          </ContainerTotalNoHealthyMeal>
        </ContainerTotalEachMeals>
      </ContainerWhite>
    </Container>
  );
}
