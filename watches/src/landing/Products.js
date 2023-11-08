// Define an array of products with some sample data
const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 19.99,
      imageUrl: 'product1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 24.99,
      imageUrl: 'product2.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 14.99,
      imageUrl: 'product3.jpg'
    }
    // Add more products as needed
  ];
  
  // Function to fetch all products
  function getAllProducts() {
    return products;
  }
  
  // Function to fetch a product by its ID
  function getProductById(productId) {
    return products.find(product => product.id === productId);
  }
  
  // Export the functions to use in other files
  export { getAllProducts, getProductById };
  