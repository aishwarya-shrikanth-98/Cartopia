import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#D7D0BC'
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7D0BC'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderColor: 'black',
    borderWidth: 1
  },
  email: {
    fontSize: 16,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: 'black',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});
