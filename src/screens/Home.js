import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../styles/Home_Styles';
import { getProducts, getProductsByCategory, getCategories } from '../services/Home_Services';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const userProfile = route.params?.userProfile;

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [searchQuery, selectedCategories, minPrice, maxPrice]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      if (selectedCategories.length === 0) {
        // Fetch all products initially
        const allProducts = await getProducts();
        setProducts(filterAndCleanProducts(allProducts));
      } else {
        // Fetch products based on selected categories
        const categoryRequests = selectedCategories.map(async (categoryName) => {
          const categoryId = categories.find(c => c.name === categoryName)?.id;
          return getProductsByCategory(categoryId);
        });

        const allProducts = (await Promise.all(categoryRequests)).flat();
        setProducts(filterAndCleanProducts(allProducts));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndCleanProducts = (products) => {
    const cleanedProducts = products.map(product => ({
      ...product,
      images: product.images.filter(img => img && img.startsWith('http')),
    }));

    return cleanedProducts.filter(product => {
      const matchesSearch = searchQuery ? product.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      const matchesMinPrice = minPrice ? product.price >= parseFloat(minPrice) : true;
      const matchesMaxPrice = maxPrice ? product.price <= parseFloat(maxPrice) : true;
      return matchesSearch && matchesMinPrice && matchesMaxPrice;
    });
  };

  const fetchCategories = async () => {
    try {
      const allCategories = await getCategories();
      const uniqueCategories = Array.from(new Set(allCategories.map(cat => cat.name)))
        .map(name => allCategories.find(cat => cat.name === name));
      setCategories(uniqueCategories);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryPress = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { productId: product.id });
  };

  const renderProductImage = (image) => {
    return image && image.startsWith('http') ? (
      <Image source={{ uri: encodeURI(image) }} style={styles.productImage} />
    ) : (
      <Text style={styles.imageUnavailableText}>Image unavailable</Text>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text style={styles.hamburgerMenu}>☰</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.searchBar}
            placeholder="Search products..."
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <View style={styles.fixedHeader}>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleCategoryPress(item.name)}
                style={selectedCategories.includes(item.name) ? styles.selectedCategoryButton : styles.categoryButton}
              >
                <Text style={selectedCategories.includes(item.name) ? styles.selectedFilter : styles.filter}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.filterContainer}
          />
          <View style={styles.priceContainer}>
            <TextInput
              style={styles.priceInput}
              placeholder="Min Price"
              placeholderTextColor="gray"
              value={minPrice}
              onChangeText={setMinPrice}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.priceInput}
              placeholder="Max Price"
              placeholderTextColor="gray"
              value={maxPrice}
              onChangeText={setMaxPrice}
              keyboardType="numeric"
            />
          </View>
        </View>
        {loading ? (
          <View style={styles.loaderWrapper}>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : (
          <>
            {products.length === 0 ? (
              <View style={styles.noResultsWrapper}>
                <Text style={styles.noResults}>No results found</Text>
              </View>
            ) : (
              <FlatList
                data={products}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.productCard} onPress={() => handleProductPress(item)}>
                    {renderProductImage(item.images[0])}
                    <View style={styles.productInfo}>
                      <Text style={styles.productTitle}>{item.title}</Text>
                      <Text style={styles.productPrice}>${item.price}</Text>
                      <Text style={styles.productCategory}>{item.category.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingTop: 16 }} // Add padding to avoid overlap with fixed header
              />
            )}
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
