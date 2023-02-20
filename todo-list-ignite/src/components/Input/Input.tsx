/* eslint-disable no-unused-expressions */
import { PlusCircle } from 'phosphor-react-native';
import { useContext } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { TaskContext } from '../../context/TaskContext';

export function Input() {
  const { text, countCreatedTasks, setCountCreatedTasks, setText, setTasks, tasks } =
    useContext(TaskContext);

  function handleAddNewTask(text: string) {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text,
    };

    setTasks([...tasks, newTask]);
    setText('');
  }

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
              ? (setCountCreatedTasks(countCreatedTasks + 1), handleAddNewTask(text))
              : Alert.alert('Atenção', 'Insira um texto válido para criar sua tarefa');
          }}>
          <PlusCircle size={20} color="#fff" weight="bold" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
