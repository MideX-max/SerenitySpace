import React, { useEffect, useState } from "react";
import "./Loading.css";
import logo from "../Assets/btter.png"; // replace if you get a new logo

const Loading = ({ onFinish }) => {
  const [status, setStatus] = useState("Checking connection...");

  useEffect(() => {
    let checkInterval;

    const checkConnection = () => {
      if (navigator.onLine) {
        setStatus("");

        // simulate slow internet by delaying finish
        setTimeout(() => {
          onFinish(); // tell App.jsx we’re ready
        }, 2500); // adjust for slower/faster transitions
      } else {
        setStatus("No internet connection ❌");
      }
    };

    // First check immediately
    checkConnection();

    // Keep checking every 3s if offline
    checkInterval = setInterval(checkConnection, 3000);

    return () => clearInterval(checkInterval);
  }, [onFinish]);

  return (
    <div className="loading-container">
      <div className="loading-logo">
        <img src={logo} alt="Serenity Space" />
      </div>
      <h2 className="loading-text">{status}</h2>
    </div>
  );
};

export default Loading;
