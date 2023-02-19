import { ClipboardText } from 'phosphor-react-native';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <ClipboardText size={100} color="#808080" />
      <View style={styles.containerText}>
        <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.textNormal}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  );
}
