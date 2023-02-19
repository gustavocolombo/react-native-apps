import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerManageTask: {
    flexDirection: 'column',
    width: '100%',
    padding: 10,
    marginTop: 32,
  },
  containerTasks: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  createdTasksContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  finishedTasksContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textCreatedTasks: {
    color: '#4EA8DE',
    fontSize: 20,
    fontWeight: '800',
    marginRight: 5,
  },
  textFinishedTasks: {
    color: '#5E60CE',
    fontSize: 20,
    fontWeight: '800',
  },
  countTasks: {
    backgroundColor: '#262626',
    borderRadius: 999,
    paddingLeft: 7,
    paddingRight: 7,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textCount: {
    color: '#fff',
    padding: 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
