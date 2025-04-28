import React from 'react';
import Navbar from './components/Navbar'; // مكون Navbar
import SignupForm from './pages/Login'; // مكون SignupForm
import './App.css'; // ملف CSS

const App = () => {
  return (
    <div className="app-container">
      {/* الخلفية */}
      <div className="background-container">
        <div className="ellipse"></div>
      </div>

      {/* Navbar Component */}
      <Navbar />

      {/* Signup Form Component */}
      <div className="form-container">
        <SignupForm />
      </div>
    </div>
  );
};

export default App;
