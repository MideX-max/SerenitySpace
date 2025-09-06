// src/components/Register.jsx
import React, { useState } from 'react';
import './Register.css';
import ocean from '../assets/ocean.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();

  // Form state
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  // Email/Password Signup
  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1) create auth account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2) save extra data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username,
        email,
        createdAt: serverTimestamp()
      });

      // Navigate to homepage and pass success message in location state
      navigate('/homepage', { state: { message: 'Successfully registered!' } });
    } catch (err) {
      console.error('Error signing up:', err);
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  // Google Signup
  const handleGoogleSignup = async () => {
    setError('');
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await setDoc(doc(db, 'users', result.user.uid), {
        username: result.user.displayName || '',
        email: result.user.email,
        createdAt: serverTimestamp()
      });

      navigate('/homepage', { state: { message: 'Successfully registered with Google!' } });
    } catch (err) {
      console.error('Google signup error:', err);
      setError(err.message || 'Google signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container page-fade">
      <div className="bg-image-3" style={{ backgroundImage: `url(${ocean})` }}></div>
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
            <button type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          {error && <p className="error-text">{error}</p>}

          <div className="social-icons">
            <span
              className="social-icon google-icon"
              onClick={handleGoogleSignup}
              role="button"
              aria-label="Sign up with Google"
            >
              <FaGoogle />
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
