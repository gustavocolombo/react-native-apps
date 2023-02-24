import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '../screens/Groups';
import { NewGroup } from '../screens/NewGroup';
import { Teams } from '../screens/Teams';

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="newGroup" component={NewGroup} />
      <Screen name="teams" component={Teams} />
    </Navigator>
  );
}
