import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/TermsAndConditions_Styles';

const TermsAndConditionsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.header}>Terms & Conditions</Text>
        <Text style={styles.content}>
          Welcome to Cartopia, an e-commerce platform that provides a range of products for customers to purchase. By using our platform, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Cartopia's relationship with you in relation to this platform.
          {"\n\n"}
          The use of this platform is subject to the following terms of use:
          {"\n"}
          1. The content of the pages of this platform is for your general information and use only. It is subject to change without notice.
          {"\n"}
          2. This platform uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.
          {"\n"}
          3. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this platform for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
          {"\n"}
          4. Your use of any information or materials on this platform is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this platform meet your specific requirements.
          {"\n"}
          5. Unauthorized use of this platform may give rise to a claim for damages and/or be a criminal offense.
          {"\n"}
          6. From time to time, this platform may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
        </Text>
      </View>
    </ScrollView>
  );
};

export default TermsAndConditionsScreen;
