import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { styles } from '../styles/AboutUs_Styles';

const AboutUsScreen = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/cartopia-app-icon.png')} style={styles.icon} testID="app-icon" />
      <Text style={styles.appName}>Cartopia</Text>
      <Text style={styles.description}>
        Welcome to Cartopia, the ultimate e-commerce platform designed to make your shopping experience seamless and enjoyable. With a wide range of products spanning across various categories, we aim to provide our customers with the best quality items at competitive prices. Whether you're looking for the latest gadgets, fashionable apparel, or household essentials, Cartopia has it all.
      </Text>
      <Text style={styles.description}>
        Our user-friendly interface ensures that you can effortlessly browse, search, and purchase your desired products with just a few clicks. We understand the importance of convenience, which is why we offer a range of payment options and swift delivery services. At Cartopia, customer satisfaction is our top priority, and we strive to exceed your expectations with every purchase.
      </Text>
      <Text style={styles.description}>
        In addition to our extensive product catalog, we also offer exclusive deals and discounts to our loyal customers. Stay updated with the latest promotions and seasonal sales to make the most out of your shopping experience. Join the Cartopia community today and discover a world of endless possibilities and exceptional service.
      </Text>
      <Text style={styles.description}>
        Thank you for choosing Cartopia as your go-to shopping destination. We are committed to continuously improving our platform and services to better serve you. If you have any feedback or suggestions, please feel free to reach out to our dedicated customer support team. Happy shopping!
      </Text>
    </ScrollView>
  );
};

export default AboutUsScreen;
