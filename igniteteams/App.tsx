import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Groups } from '@screens/Groups';
import theme from '@theme/index';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { NewGroup } from './src/screens/NewGroup';
import { Teams } from './src/screens/Teams';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" networkActivityIndicatorVisible />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
