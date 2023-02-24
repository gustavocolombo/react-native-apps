import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import list from '../../assets/list.png';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={list} style={{ height: 65, width: 65, marginBottom: 16 }} />
      <View style={styles.containerText}>
        <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.textNormal}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  );
}
