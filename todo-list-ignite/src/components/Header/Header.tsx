import { Rocket } from 'phosphor-react-native';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Rocket size={30} weight="bold" color="#fff" />
      <View style={styles.todoStyle}>
        <Text style={styles.textBlue}>to</Text>
        <Text style={styles.textPurple}>do</Text>
      </View>
    </View>
  );
}
