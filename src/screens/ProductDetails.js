import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { styles } from '../styles/ProductDetails_Style';

const ProductDetailsScreen = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { productId } = route.params;

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
        setProduct(response.data);
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

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <ScrollView horizontal style={styles.imageCarousel}>
        {renderProductImages()}
      </ScrollView>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
