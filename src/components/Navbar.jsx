import React from 'react';

export default function ArabicHeader() {

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '50%',
      position: 'fixed',
      top: '20px', 
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '1000', 
      direction: 'rtl',
    },
    logo: {
      height: '40px',
      width: '40px',
      backgroundColor: '#f0f0f0',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      fontWeight: 'bold'
    },
    navOptions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px'
    },
    navButton: {
      color: '#9747FF',
      fontWeight: '500',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px'
    },
    loginButton: {
      backgroundColor: '#9747FF',
      color: 'white',
      padding: '8px 24px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.logo}>
          <span>شعار</span>
        </div>
      </div>

      <div style={styles.navOptions}>
        <textbutton style={styles.navButton}>اختبار</textbutton>
        <textbutton style={styles.navButton}>تلخيص</textbutton>
        <textbutton style={styles.navButton}>فلاشكاردز</textbutton>
      </div>

      <div>
        <button style={styles.loginButton}>
          دخول
        </button>
      </div>
    </div>
  );
}
