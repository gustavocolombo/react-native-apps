import { Loading } from "@components/Loading";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { Home } from "@screens/Home";
import { MealDetail } from "@screens/MealDetail";
import { NegativeFeedback } from "@screens/NegativeFeedback";
import { NewMeal } from "@screens/NewMeal";
import { PositiveFeedback } from "@screens/PositiveFeedback";
import theme from "@theme/index";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { AverageStatistics } from "./src/screens/AverageStatistics";
import { EditMeal } from "./src/screens/EditMeal";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent networkActivityIndicatorVisible style="dark" />
      {fontsLoaded ? <AverageStatistics /> : <Loading />}
    </ThemeProvider>
  );
}
