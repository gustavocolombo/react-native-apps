import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerInput: {
    width: '100%',
  },
  contentWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    marginTop: 70,
  },
  textInput: {
    flex: 1,
    height: 52,
    width: 52,
    borderRadius: 6,
    padding: 16,
    backgroundColor: '#262626',
    color: '#fff',
    fontSize: 18,
    lineHeight: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    height: 52,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
});
