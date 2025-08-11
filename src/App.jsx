import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homeauth from "./Authentication/Homeauth.jsx"
import Login from "./Authentication/Login.jsx"
import Register from "./Authentication/Register.jsx"
import Homepage from "./Components/Homepage.jsx"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeauth />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
