import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
// import useNavigate from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const history = useHistory();
  // const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    // Login Logic Here
    console.log('Logging in with:', email, password);

    const userInfo = {
      email: email,
      password: password
    }

    const eemail = email;

    try {
      const url = 'http://localhost:5000/api/auth/';
      axios.post(url, userInfo)
        .then((res) => {

          localStorage.setItem("token", res.data.data);
          console.log("Logged in with", userInfo)
          console.log(eemail)
          const url2 = 'http://localhost:5000/api/user/' + eemail;
          axios.get(url2)
          .then((res) => {
            console.log(res.data.isAdmin)
            if (res.data.isAdmin) {
              localStorage.setItem("isAdmin", res.data.isAdmin);
            }
            window.location = '/';

            })
            .catch((err) => {
              console.log(err);
              setError(err);
            });
            // window.location = '/';
            // navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        });

    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }

    // window.location = '/';

  };

  return (
    <div style={formContainer}>
      <h2 style={headingStyle}>Login</h2>
      <form onSubmit={handleLogin} style={formStyle}>
        <div style={inputGroup}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputGroup}>
          <label htmlFor="password" style={labelStyle}>Password:</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
}

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

export default LoginForm;
