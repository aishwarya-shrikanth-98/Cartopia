import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#D7D0BC'
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold'
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
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  signUp: {
    color: 'black',
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});