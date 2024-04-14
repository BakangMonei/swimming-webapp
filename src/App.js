import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import "./App.css";
import LoginPage from "./auth/LoginPage";
import { auth } from "./firebase/firebase";

// Function to check if user is authenticated
const isAuthenticated = () => {
  return auth.currentUser !== null;
};

// Private Route component to handle authentication
const PrivateRoute = ({ element, path }) => {
  return isAuthenticated() ? element : <Navigate to="/LoginPage" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/SplashScreen" element={<SplashScreen />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        {/* Private routes */}
        {/* Uncomment the following lines when you need private routes */}
        {/* 
        <Route
          path="/UserDashboard"
          element={<PrivateRoute element={<UserDashboard />} />}
        />
        */}
      </Routes>
    </Router>
  );
}

export default App;
