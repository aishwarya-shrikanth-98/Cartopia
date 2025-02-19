import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  hamburgerMenu: {
    fontSize: 30,
    paddingRight: 10,
  },
  searchBar: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  fixedHeader: {
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceInput: {
    width: '48%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  categoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  selectedCategoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#007BFF',
  },
  filter: {
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 10,
  },
  selectedFilter: {
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 10,
  },
  productCard: {
    flexDirection: 'row',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  imageUnavailableText: {
    width: 50,
    height: 50,
    marginRight: 16,
    textAlign: 'center',
    lineHeight: 50,
    color: '#888',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#888',
  },
  productCategory: {
    fontStyle: 'italic',
  },
  noResults: {
    textAlign: 'center',
    color: '#888',
  },
  noResultsWrapper: {
    marginTop: 16,
    alignItems: 'center',
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
