import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './AddWatchForm.css'; 

Modal.setAppElement('#root');

const AddWatchForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
    image: '',
    code: '',
    manufacturer: '',
    color: '',
    rating: '',
    brand: '',
    description: ''
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request using Axios
    axios.post('http://localhost:5000/api/createwatch', formData)
      .then(response => {
        console.log(response.data);
        setModalIsOpen(true); 
        setFormData({
          name: '',
          price: '',
          stock: '',
          category: '',
          image: '',
          code: '',
          manufacturer: '',
          color: '',
          rating: '',
          brand: '',
          description: ''
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>Add a New Watch</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required /><br /><br />

        <label htmlFor="stock">Stock:</label>
        <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} required /><br /><br />

        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required /><br /><br />

        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required /><br /><br />

        <label htmlFor="code">Code:</label>
        <input type="text" id="code" name="code" value={formData.code} onChange={handleChange} required /><br /><br />

        <label htmlFor="manufacturer">Manufacturer:</label>
        <input type="text" id="manufacturer" name="manufacturer" value={formData.manufacturer} onChange={handleChange} required /><br /><br />

        <label htmlFor="color">Color:</label>
        <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} required /><br /><br />

        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} required /><br /><br />

        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} required /><br /><br />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required /><br /><br />

        <input type="submit" value="Add Watch" />
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
      >
        <h2>Watch added successfully!</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default AddWatchForm;