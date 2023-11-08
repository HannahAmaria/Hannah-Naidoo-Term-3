import React, { useState, useEffect } from 'react';

function Cart() {
  // State to store the cart items
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from session storage
    const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item.code !== itemToRemove.code);
    setCartItems(updatedCartItems);
    sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Calculate the total price
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Function to handle the checkout process
  const handleCheckout = async () => {
    try {
      // Set a default value for the name
      const defaultName = 'testing';
  
      // Calculate the total price
      const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  
      // Make a POST request to your server's createorder endpoint
      const response = await fetch('http://localhost:5000/api/createorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: defaultName,
          total: total,
          content: cartItems,
        }),
      });
  
      if (response.ok) {
        // If the request is successful, you can clear the cart or perform any other actions
        setCartItems([]);
        sessionStorage.removeItem('cartItems');
        alert('Checkout successful!');
      } else {
        // Handle errors, maybe show an error message to the user
        alert('Checkout failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };
  
  return (
    <div className="container mt-5 py-4 px-xl-5">
      <h2>Your Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end">

      </div>
      <button className="btn btn-primary" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;

