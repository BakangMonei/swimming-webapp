import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-spinkit'; // Import Spinner component

const SplashScreen = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate("/LoginPage"); // Navigate to LoginPage.js
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Use react-spinkit Spinner component */}
      <Spinner
        name="circle" // You can choose from various spinner styles
        color="blue" // Customize spinner color if needed
        fadeIn="none"
        className="w-64 h-64 animate-fade-in animate-spin"
        style={{ display: isLoading ? 'block' : 'none' }} // Show spinner when isLoading is true
      />
    </div>
  );
};

export default SplashScreen;
