import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homeauth from "./Authentication/Homeauth.jsx";
import Login from "./Authentication/Login.jsx";
import Register from "./Authentication/Register.jsx";
import Homepage from "./Components/Homepage.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Loading from "./Components/Loading.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading ? (
        // Show splash/loading screen until it's finished
        <Loading onFinish={() => setLoading(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<Homeauth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/homepage"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route path="/loading" element={<Loading onFinish={() => setLoading(false)} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
