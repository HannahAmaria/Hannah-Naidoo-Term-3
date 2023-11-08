import React, { useState, useEffect } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from your server's endpoint
    fetch('http://localhost:5000/api/getorders') // Adjust the endpoint based on your server
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []); 

  const handleDeleteOrder = async (orderId) => {
    try {
      // Make a DELETE request to your server's deleteorder endpoint
      const response = await fetch(`http://localhost:5000/api/deleteorder/${orderId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the delete request is successful, update the orders state to reflect the change
        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        alert('Order deleted successfully!');
      } else {
        // Handle errors, maybe show an error message to the user
        alert('Failed to delete order. Please try again later.');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <h2>Order List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Total</th>
            <th>Items</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
   
              <td>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.content.map((item, index) => (
                      <tr key={index}>
                        <td>{item.code}</td>
                        <td>{item.name}</td>
               
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteOrder(order._id)}
                >
                  Dispatch Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
