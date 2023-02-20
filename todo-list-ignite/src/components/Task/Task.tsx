/* eslint-disable no-unused-expressions */
import { Check, Circle, Trash } from 'phosphor-react-native';
import { useContext, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { TaskContext } from '../../context/TaskContext';

type TasksProps = {
  index: number;
};

export function Task({ index }: TasksProps) {
  const [pressedButton, setPressedButton] = useState(false);
  const {
    setCountFinishedTasks,
    countFinishedTasks,
    tasks,
    setTasks,
    setCountCreatedTasks,
    countCreatedTasks,
  } = useContext(TaskContext);

  const task = tasks[index];

  function handlePressButton(value: boolean) {
    if (value === true) {
      setPressedButton(true);
    } else {
      setPressedButton(false);
    }
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
    setCountCreatedTasks(countCreatedTasks - 1);

    countFinishedTasks <= 1
      ? setCountFinishedTasks(0)
      : setCountFinishedTasks(countFinishedTasks - 1);
  }

  function alertUser(id: number) {
    return Alert.alert('Atenção', 'Deseja excluir a seguinte tarefa?', [
      {
        text: 'Sim',
        onPress: () => handleRemoveTask(id),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function updateCountFinishedTasks(value: string) {
    if (value === 'increment') {
      setCountFinishedTasks(countFinishedTasks - 1);
    } else {
      setCountFinishedTasks(countFinishedTasks + 1);
    }
  }

  return (
    <>
      {pressedButton === false ? (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              handlePressButton(true);
              updateCountFinishedTasks('decrement');
            }}>
            <Circle color="#4EA8DE" size={30} weight="bold" />
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontWeight: '400', fontSize: 18 }}>{task.text}</Text>
          <TouchableOpacity onPress={() => alertUser(task.id)}>
            <Trash color="#808080" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            style={{ borderRadius: 999, backgroundColor: '#5E60CE', padding: 3 }}
            onPress={() => {
              handlePressButton(false);
              updateCountFinishedTasks('increment');
            }}>
            <Check size={20} color="#fff" weight="regular" />
          </TouchableOpacity>
          <Text style={styles.textStylePressed}>{task.text}</Text>
          <TouchableOpacity onPress={() => alertUser(task.id)}>
            <Trash color="#808080" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
