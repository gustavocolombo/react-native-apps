import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { Home } from "@screens/Home";
import theme from "@theme/index";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Loading } from "./src/components/Loading";
import { NegativeFeedback } from "./src/screens/NegativeFeedback";
import { NewMeal } from "./src/screens/NewMeal";
import { PositiveFeedback } from "./src/screens/PositiveFeedback";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent networkActivityIndicatorVisible style="dark" />
      {fontsLoaded ? <NewMeal /> : <Loading />}
    </ThemeProvider>
  );
}
