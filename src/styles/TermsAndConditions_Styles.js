import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#D7D0BC',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7D0BC',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  footer: {
    marginTop: 32,
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
});
