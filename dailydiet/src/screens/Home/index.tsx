import { ButtonMI } from "@components/ButtonMI";
import { EmptyList } from "@components/EmptyList";
import { Header } from "@components/Header";
import { MealCard } from "@components/MealCard";
import { Statistics } from "@components/Statistics";
import { useState } from "react";
import { FlatList, Text } from "react-native";

import { Container, NewMealContainer, DateOfMeal } from "./styles";

export function Home() {
  const [meals, setMeals] = useState<string[]>(["X-tudo", "X-Salada"]);

  return (
    <Container>
      <Header />
      <Statistics color="primary" />
      <NewMealContainer>
        <Text>Refeições</Text>
        <ButtonMI iconName="add" textButton="Nova refeição" />
      </NewMealContainer>
      <FlatList
        contentContainerStyle={{ flex: 1 }}
        data={meals}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => <EmptyList />}
        renderItem={({ item }) => (
          <>
            <DateOfMeal>12.08.22</DateOfMeal>
            <MealCard mealName={item} healthy="yes" />
          </>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
