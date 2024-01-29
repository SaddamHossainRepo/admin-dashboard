export const getAllProducts = async ({ page = 1, limit = 5 }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const products = await response.json();
  return products;
};
