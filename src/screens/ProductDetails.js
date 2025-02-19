import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from '../styles/ProductDetails_Style';
import { getProductDetails } from '../services/ProductDetails_Services';

const ProductDetailsScreen = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { productId } = route.params;

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productData = await getProductDetails(productId);
        setProduct(productData);
      } catch (error) {
        console.error('Failed to fetch product details.', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const renderProductImages = () => {
    if (product.images && product.images.length > 0) {
      return product.images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.productImage} />
      ));
    } else {
      return <Text style={styles.imageUnavailableText}>Image not available</Text>;
    }
  };

  const handleAddToCart = () => {
    Alert.alert('Success', 'Product has been added to cart.');
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product details are not available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <ScrollView horizontal style={styles.imageCarousel}>
          {renderProductImages()}
        </ScrollView>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailsScreen;
