import React from 'react';
import './Register.css';
import ocean from '../assets/ocean.jpg';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container page-fade">
      {/* Background */}
      <div
        className="bg-image-3"
        style={{ backgroundImage: `url(${ocean})` }}
      ></div>

      {/* Overlay */}
      <div className="overlay-3">
        {/* Content */}
        <div className="register-content">
          <h1>Create Your Account</h1>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
