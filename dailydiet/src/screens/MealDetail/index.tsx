import { ButtonDeleteMeal } from "@components/ButtonDeleteMeal";
import { ButtonEditMeal } from "@components/ButtonEditMeal";
import { HeaderBackButton } from "@components/HeaderBackButton";
import { ViewCircleColorComponent } from "@components/ViewCircleColor";

import {
  Container,
  ContainerRed,
  TextTitleMeal,
  TextMealContainer,
  TextSubtitleMeal,
  ContainerDateTime,
  TextDateTime,
  TextSubtitleDateTime,
  ContainerTagMeal,
  TextTagMeal,
  ContentTagMeal,
  ContainerColorOptions,
} from "./styles";
import { ContainerWhite } from "../NewMeal/styles";

type MealDetailtColorProps = {
  color?: ContainerColorOptions;
};

export function MealDetail({ color = "red" }: MealDetailtColorProps) {
  return (
    <Container>
      <ContainerRed color={color}>
        <HeaderBackButton showHeaderText="Refeição" />
      </ContainerRed>

      <ContainerWhite>
        <TextMealContainer>
          <TextTitleMeal>X-tudo</TextTitleMeal>
          <TextSubtitleMeal>X-tudo completo no Nori</TextSubtitleMeal>
        </TextMealContainer>

        <ContainerDateTime>
          <TextDateTime>Data e hora</TextDateTime>
          <TextSubtitleDateTime>12/08/2022 às 16:00</TextSubtitleDateTime>
        </ContainerDateTime>

        <ContainerTagMeal>
          <ContentTagMeal>
            <ViewCircleColorComponent />
            <TextTagMeal>fora da dieta</TextTagMeal>
          </ContentTagMeal>
        </ContainerTagMeal>

        <ButtonEditMeal textButton="Editar refeição" />
        <ButtonDeleteMeal textButton="Exluir refeição" />
      </ContainerWhite>
    </Container>
  );
}
