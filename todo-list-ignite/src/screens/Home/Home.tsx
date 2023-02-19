/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Alert, FlatList, View } from 'react-native';

import { styles } from './styles';
import { EmptyList } from '../../components/EmptyList/EmptyList';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { ManageTasks } from '../../components/ManageTasks/ManageTasks';
import { Task } from '../../components/Task/Task';

export type Tasks = { id: number; text: string };

export function Home() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [text, setText] = useState('');
  const [countCreatedTasks, setCountCreatedTasks] = useState(0);
  const [countFinishedTasks, setCountFinishedTasks] = useState(0);

  function handleAddNewTask(text: string) {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text,
    };

    setTasks([...tasks, newTask]);
    setText('');
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
    setCountCreatedTasks(countCreatedTasks - 1);

    countFinishedTasks <= 1
      ? setCountFinishedTasks(0)
      : setCountFinishedTasks(countFinishedTasks - 1);
  }

  function alertUser(id: number) {
    Alert.alert('Atenção', 'Deseja excluir a seguinte tarefa?', [
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
    <View style={styles.container}>
      <Header />

      <Input
        text={text}
        handleAddNewTask={handleAddNewTask}
        setText={setText}
        createdTasks={countCreatedTasks}
        addCountCreatedTasks={setCountCreatedTasks}
      />
      <ManageTasks countCreatedTasks={countCreatedTasks} countFinishedTasks={countFinishedTasks} />

      <FlatList
        style={{ width: '100%', padding: 10 }}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <>
            <View
              style={{
                borderBottomColor: '#808080',
                borderBottomWidth: 1,
                marginTop: 10,
                width: '100%',
              }}
            />

            <EmptyList />
          </>
        )}
        renderItem={({ item }) => (
          <Task
            task={item}
            handleRemoveTask={alertUser}
            updateCountFinishedTasks={updateCountFinishedTasks}
          />
        )}
      />
    </View>
  );
}
