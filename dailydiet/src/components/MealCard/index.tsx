import {
  Container,
  ContentCard,
  HourStyle,
  TextMealStyle,
  ViewBorder,
  ViewCircleColor,
  ViewCircleProps,
} from "./styles";

type MealCardPros = {
  mealName: string;
  healthy: ViewCircleProps;
};

export function MealCard({ mealName, healthy = "no" }: MealCardPros) {
  return (
    <Container>
      <ContentCard>
        <HourStyle>20:00</HourStyle>
        <ViewBorder>
          <TextMealStyle>{mealName}</TextMealStyle>
        </ViewBorder>
        <ViewCircleColor healthy={healthy} />
      </ContentCard>
    </Container>
  );
}
