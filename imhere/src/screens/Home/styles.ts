import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 24,
    justifyContent: 'flex-start',
  },
  text: {
    color: '#fff',
    marginTop: 60,
    fontWeight: 'bold',
    fontSize: 30,
  },
  date: {
    color: '#fff',
    marginTop: 10,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 30,
    marginBottom: 50,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    padding: 16,
    borderRadius: 7,
    height: 50,
    marginRight: 7,
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31CF67',
    height: 50,
    borderRadius: 7,
    width: 56,
  },
  textButton: {
    color: '#fff',
  },
  textCount: {
    color: '#fff',
    marginTop: 20,
  },
});
