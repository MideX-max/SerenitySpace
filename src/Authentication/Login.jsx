import React from 'react';
import './Login.css';
import gala from '../assets/galax.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container page-fade">
      {/* Background */}
      <div
        className="bg-image-2"
        style={{ backgroundImage: `url(${gala})` }}
      ></div>

      {/* Overlay */}
      <div className="overlay-2">
        {/* Content */}
        <div className="login-content">
          <h1>Welcome Back</h1>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
