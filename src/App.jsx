import React from 'react';
import Navbar from './components/Navbar';
import SignupForm from './pages/Login';
import './App.css'; // تأكد من إنشاء ملف CSS لاستايلات إضافية إذا لزم الأمر

const App = () => {
  return (
    <div className="app-container" style={{
      width: '100%', 
      height: '100vh', 
      position: 'relative', 
      background: '#FCFAFF', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // توسيط العناصر عموديًا
      alignItems: 'center', // توسيط العناصر أفقيًا
    }}>
      {/* الخلفية */}
      <div className="background-container" style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
      }}>
        {/* خلفية التدرج (Ellipse) */}
        <div className="ellipse" style={{
          width: 644, 
          height: 772, 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.23, 
          background: '#B692F6', 
          boxShadow: '38.1px 38.1px 38.1px', 
          borderRadius: 9999, 
          filter: 'blur(19.05px)',
        }} />
      </div>

      {/* Navbar Component */}
      <Navbar style={{
        
        position: 'absolute',
        top: '20px',  // المسافة بين الـ Navbar والحافة العلوية
        left: '20px', // المسافة بين الـ Navbar والحافة اليسرى
        right: '20px', // المسافة بين الـ Navbar والحافة اليمنى
        zIndex: 1,
      }} />
      
      {/* Signup Form Component */}
      <div className="form-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        zIndex: 1,
        marginTop: 'auto', // وضع الفورم في الأسفل بعد Navbar
        marginBottom: '20px', // مسافة بين الفورم والحافة السفلية
      }}>
        <SignupForm />
      </div>
    </div>
  );
};

export default App;
