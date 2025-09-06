import React from 'react';
import './Auth.css';
import { ReactTyped } from "react-typed";
import base from '../assets/baseone.jpg';
import { Link } from 'react-router-dom';

const Homeauth = () => {
  return (
    <div className="hero">
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${base})` }}></div>
       <div className="overlay">
        <div className="content">
          <p className="lay fade-in delay-0">
            <ReactTyped
              className='typed'
              strings={['Welcome to Serenity Space']}
              typeSpeed={90}
              backSpeed={50}
              loop
              showCursor/>
         </p>
               <p className="fade-up delay-1">
                 Serenity Space is a platform where you can share your thoughts and ideas with the world. 
                 Join us to start your blogging journey today!
               </p>
             <div className="auth-buttons fade-up delay-2">
                 <Link to="/login" className="btn btn-primary">Login</Link>
                 <Link to="/register" className="btn btn-secondary">Register</Link>
               </div>
        </div>
      </div>
    </div>
  );
};

export default Homeauth;
