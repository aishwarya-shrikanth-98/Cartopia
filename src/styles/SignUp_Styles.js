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
  loginText: {
    color: 'black',
    marginTop: 12,
    textDecorationLine: 'underline',
    fontStyle: 'italic'
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7D0BC',
    marginBottom: 12,
    borderColor: 'black',
    borderWidth: 1
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});