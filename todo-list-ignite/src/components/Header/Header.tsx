import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import rocket from '../../assets/rocket.png';

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={rocket} />
      <View style={styles.todoStyle}>
        <Text style={styles.textBlue}>to</Text>
        <Text style={styles.textPurple}>do</Text>
      </View>
    </View>
  );
}
