import axios from 'axios';

const getProducts = async () => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/products');
  return response.data;
};

const getProductsByCategory = async (categoryId) => {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
  return response.data;
};

export {
  getProducts,
  getProductsByCategory,
  getCategories,
};
