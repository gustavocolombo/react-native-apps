import { Text, View } from 'react-native';

import { styles } from './styles';

interface ManageTasksProps {
  countCreatedTasks: number;
  countFinishedTasks: number;
}

export function ManageTasks({ countCreatedTasks, countFinishedTasks }: ManageTasksProps) {
  return (
    <View style={styles.containerManageTask}>
      <View style={styles.containerTasks}>
        <View style={styles.createdTasksContainer}>
          <Text style={styles.textCreatedTasks}>Criadas</Text>
          <View style={styles.countTasks}>
            <Text style={styles.textCount}>{countCreatedTasks}</Text>
          </View>
        </View>

        <View style={styles.finishedTasksContainer}>
          <Text style={styles.textFinishedTasks}>Concluídas</Text>
          <View style={[styles.countTasks, { marginLeft: 5 }]}>
            <Text style={styles.textCount}>{countFinishedTasks}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
