import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#262626',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 64,
  },
  textStylePressed: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
});
