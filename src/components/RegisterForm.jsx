import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = ({ setRegistered }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    
    alert('Registration successful! Now go back to login.');
    setRegistered(false); 
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
      <p className="login-link">
        Already registered?{' '}
        <Link to="/login" className="link">Go to Login</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
