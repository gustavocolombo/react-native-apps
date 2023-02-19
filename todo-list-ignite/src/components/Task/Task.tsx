import { Check, Circle, Trash } from 'phosphor-react-native';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Tasks } from '../../screens/Home/Home';

type TaskProps = {
  task: Tasks;
  handleRemoveTask: (id: number) => void;
  updateCountFinishedTasks: (value: string) => void;
};

export function Task({ task, handleRemoveTask, updateCountFinishedTasks }: TaskProps) {
  const [pressedButton, setPressedButton] = useState(false);

  function handlePressButton(value: boolean) {
    if (value === true) {
      setPressedButton(true);
    } else {
      setPressedButton(false);
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
          <TouchableOpacity onPress={() => handleRemoveTask(task.id)}>
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
          <TouchableOpacity onPress={() => handleRemoveTask(task.id)}>
            <Trash color="#808080" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
