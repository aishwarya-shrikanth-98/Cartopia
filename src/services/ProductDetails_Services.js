import axios from 'axios';

const getProductDetails = async (productId) => {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
  return response.data;
};

export {
  getProductDetails,
};
