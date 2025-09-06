import React from 'react';
import './Login.css';
import gala from '../assets/galax.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      navigate("/homepage");
    } catch (err) {
      console.error("Login failed:", err.message);
      alert(err.message);
    }
  };

  return (
    <div className="login-container page-fade">
      {/* Background */}
      <div
        className="bg-image-2"
        style={{ backgroundImage: `url(${gala})` }}
      ></div>

      {/* Overlay */}
      <div className="overlay-2">
        <div className="login-content">
          <h1>Welcome Back</h1>
          <form onSubmit={handleLogin}>
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
