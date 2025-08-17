import React, { useState } from 'react';
import './Register.css';
import ocean from '../assets/ocean.jpg';
import { Link } from 'react-router-dom';
import { auth, googleProvider, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { FaGoogle, FaInstagram, FaTiktok } from 'react-icons/fa';

const Register = () => {
  // Form state
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  // Email/Password Signup
  const handleEmailSignup = async (e) => {
    e.preventDefault();
    try {
      // 1. Create Auth account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Save extra data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username,
        email,
        createdAt: serverTimestamp()
      });

      console.log('User created & saved:', user.uid);
    } catch (err) {
      console.error('Error signing up:', err.message);
      setError(err.message);
    }
  };

  // Google Signup
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google User:', result.user);

      // Optional: Save Google user to Firestore
      await setDoc(doc(db, 'users', result.user.uid), {
        username: result.user.displayName || '',
        email: result.user.email,
        createdAt: serverTimestamp()
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Instagram Signup (OAuth redirect)
  const handleInstagramSignup = () => {
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=YOUR_INSTAGRAM_CLIENT_ID&redirect_uri=${encodeURIComponent(
      'YOUR_REDIRECT_URI'
    )}&scope=user_profile&response_type=code`;
  };

  // TikTok Signup (OAuth redirect)
  const handleTikTokSignup = () => {
    window.location.href = `https://www.tiktok.com/v2/auth/authorize/?client_key=YOUR_TIKTOK_CLIENT_KEY&scope=user.info.basic&response_type=code&redirect_uri=${encodeURIComponent(
      'YOUR_REDIRECT_URI'
    )}`;
  };

  return (
    <div className="register-container page-fade">
      <div
        className="bg-image-3"
        style={{ backgroundImage: `url(${ocean})` }}
      ></div>

      <div className="overlay-3">
        <div className="register-content">
          <h1>Create Your Account</h1>

          <form onSubmit={handleEmailSignup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit"><Link to="/homepage"></Link>Register</button>
          </form>

          {error && <p className="error-text">{error}</p>}

          {/* Social Auth Icons */}
          <div className="social-icons">
            <span className="social-icon google-icon" onClick={handleGoogleSignup}>
              <FaGoogle />
            </span>

            <span className="social-icon instagram-icon" onClick={handleInstagramSignup}>
              <FaInstagram />
            </span>

            <span className="social-icon tiktok-icon" onClick={handleTikTokSignup}>
              <FaTiktok />
            </span>
          </div>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
