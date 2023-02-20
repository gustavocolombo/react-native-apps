/* eslint-disable no-unused-expressions */
import { useContext } from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';
import { EmptyList } from '../../components/EmptyList/EmptyList';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { ManageTasks } from '../../components/ManageTasks/ManageTasks';
import { Task } from '../../components/Task/Task';
import { TaskContext } from '../../context/TaskContext';

export type Tasks = { id: number; text: string };

export function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <Header />

      <Input />
      <ManageTasks />

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
        renderItem={({ item, index }) => <Task index={index} />}
      />
    </View>
  );
}
