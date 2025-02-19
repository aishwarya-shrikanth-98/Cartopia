import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imageCarousel: {
    height: 150,
    marginBottom: 16,
  },
  productImage: {
    width: 400,
    height: 400,
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
  },
});
