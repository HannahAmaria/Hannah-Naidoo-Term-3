import React, { useState } from 'react';
import axios from 'axios';

const formContainer = {
  margin: 'auto',
  padding: '20px',
  width: '300px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const headingStyle = {
  textAlign: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputGroup = {
  marginBottom: '15px',
};

const labelStyle = {
  marginBottom: '5px',
  display: 'block',
};

const inputStyle = {
  padding: '8px',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '8px 12px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};

function SignUpForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Sign-up logic here
    console.log('Signing up with:', email, password, name, surname);

    const userInfo = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      profileImage:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      isAdmin: false,
    };

    try {
      const url = 'http://localhost:5000/api/registerUser/';
      const { userInfo: res } = await axios.post(url, userInfo);

      //redirect
      console.log('success');
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        // Handle the error or display an error message
      }
    }
  };

  return (
    <div style={formContainer}>
      <h2 style={headingStyle}>Sign Up</h2>
      <form style={formStyle} onSubmit={handleSignUp}>
        <div style={inputGroup}>
          <label style={labelStyle} htmlFor="name">
            Name:
          </label>
          <input
            style={inputStyle}
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div style={inputGroup}>
          <label style={labelStyle} htmlFor="surname">
            Surname:
          </label>
          <input
            style={inputStyle}
            type="text"
            placeholder="Surname"
            name="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>

        <div style={inputGroup}>
          <label style={labelStyle} htmlFor="email">
            Email:
          </label>
          <input
            style={inputStyle}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={inputGroup}>
          <label style={labelStyle} htmlFor="password">
            Password:
          </label>
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button style={buttonStyle} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
