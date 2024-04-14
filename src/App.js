import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux"; // Import createStore from redux
import rootReducer from "./redux/reducers"; // Import your root reducer
import SplashScreen from "./layouts/SplashScreen";
import "./App.css";
import LoginPage from "./auth/LoginPage";
import { auth } from "./firebase/firebase";

// Create Redux store
const store = createStore(rootReducer);

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
    // Provide the Redux store to your React app
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
