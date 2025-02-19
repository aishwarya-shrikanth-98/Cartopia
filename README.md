# Cartopia

## Overview
Cartopia is an ultimate e-commerce platform designed to make your shopping experience seamless and enjoyable. With a wide range of products spanning across various categories, Cartopia aims to provide customers with the best quality items at competitive prices. Whether you're looking for the latest gadgets, fashionable apparel, or household essentials, Cartopia has it all.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screens](#screens)
- [Services](#services)
- [Styles](#styles)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication (sign up and login)
- Product browsing and filtering
- Product details view
- Add to cart functionality
- User profile management
- About us section
- Terms and conditions

## Installation
To get started with Cartopia, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/aishwarya-shrikanth-98/Cartopia.git
   cd cartopia
   ```

2. Install Pods:
   ```sh
   cd ios && pod install && cd ..
   ```

## Usage
To start the development server, run:
```sh
npx react-native start
```

To run the app on an iOS simulator, run:
```sh
npx react-native run-ios
```

To run the app on an Android emulator, run:
```sh
npx react-native run-android
```

## Project Structure
```
project-root/
│
├── __tests__/
│   └── example.test.js
├── src/
│   ├── screens/
│   │   ├── AboutUs.js
│   │   ├── EditProfile.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── ProductDetails.js
│   │   └── SignUp.js
│   │   └── TermsAndConditions.js
│   ├── services/
│   │   ├── EditProfile_Services.js
│   │   ├── Home_Services.js
│   │   └── Login_Services.js
│   │   ├── ProductDetails_Services.js
│   │   ├── SignUp_Services.js
│   └── styles/
│       ├── AboutUs_Styles.js
│       ├── EditProfile_Styles.js
│       ├── Home_Styles.js
│       ├── Login_Styles.js
│       ├── ProductDetails_Styles.js
│       └── SignUp_Styles.js
│       └── TermsAndConditions_Styles.js
├── assets/
│   └── cartopia-app-icon.png
│   └── fallback-image.png
├── jest-setup.js
├── jest.config.js
├── babel.config.js
└── package.json
```

## Screens
- **AboutUsScreen**: Provides information about Cartopia.
- **EditProfileScreen**: Allows users to view and edit their profile information.
- **HomeScreen**: Displays a list of products and allows users to filter and search for products.
- **LoginScreen**: Handles user login.
- **ProductDetailsScreen**: Displays detailed information about a product.
- **SignUpScreen**: Handles user registration.
- **TermsAndConditionsScreen**: Provides Terms and Conditions of Cartopia

## Services
- **EditProfile_Services.js**: Handles updating user profile / accounts
- **Home_Services.js**: Contains API calls related to products and categories.
- **Login_Services.js**: Handles user authentication and authorization.
- **ProductDetails_Services.js**: Contains API calls related to product details.
- **SignUp_Services.js**: Handles user account creation.

## Styles
Contains styles for each screen.

## Running Tests
To run the tests, use the following command:
```sh
npm test
```

Ensure you have configured Jest correctly and have the `jest-setup.js` file in the root directory.

## Contributing
We welcome contributions to Cartopia. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

