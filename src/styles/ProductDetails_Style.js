import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D7D0BC',
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#D7D0BC',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7D0BC',
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imageCarousel: {
    height: 150,
    marginBottom: 8,
  },
  productImage: {
    width: 300,
    height: 480,
    marginRight: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  imageUnavailableText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
    marginRight: 8,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    justifyContent: 'center',
    alignContent: 'center'
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
