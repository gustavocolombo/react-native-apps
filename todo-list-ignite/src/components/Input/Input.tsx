/* eslint-disable no-unused-expressions */
import { PlusCircle } from 'phosphor-react-native';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

interface InputProps {
  text: string;
  createdTasks: number;
  setText: (e: string) => void;
  handleAddNewTask: (text: string) => void;
  addCountCreatedTasks: (count: number) => void;
}

export function Input({
  text,
  setText,
  handleAddNewTask,
  addCountCreatedTasks,
  createdTasks,
}: InputProps) {
  return (
    <View style={styles.containerInput}>
      <View style={styles.contentWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          keyboardAppearance="dark"
          value={text}
          autoCapitalize="words"
          onChangeText={(e) => setText(e)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            text.length >= 1
              ? (addCountCreatedTasks(createdTasks + 1), handleAddNewTask(text))
              : (Alert.alert('Atenção', 'Insira um texto válido para criar sua tarefa'),
                addCountCreatedTasks(createdTasks));
          }}>
          <PlusCircle size={20} color="#fff" weight="bold" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
