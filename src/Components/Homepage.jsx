import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <div>
      <div className="header-container">
        <div className="wrapper-header">
            <div className="profile">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile"  className='profile' />
                {/* <h1>Welcome to Blogbase</h1> */}
            </div>
            <div className="settings"></div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
