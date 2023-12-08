// LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'; // Import your CSS file

const LoginForm = ({ isRegistered, setRegistered }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (isRegistered) {
      
      alert('Login successful!');
    } else {
      alert('User is not registered!');
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      {!isRegistered && (
        <p className="register-link">
          Not registered?{' '}
          <Link to="/register">Go to Register</Link>
        </p>
      )}
    </div>
  );
};

export default LoginForm;
