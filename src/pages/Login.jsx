import React from 'react';

const CreateAccount = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // لون خلفية الصفحة
      }}
    >
      <div
        style={{
          width: '400px', // عرض الكرت
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)', // الظل لجعل الكرت عائم
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '28px',
            color: '#010B38',
            marginBottom: '30px',
            fontFamily: 'Lyon Arabic Display',
            fontWeight: '500',
          }}
        >
          انشاء حساب جديد
        </h2>

        {/* أزرار الدخول باستخدام حسابات اجتماعية */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#4285F4',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                width: '48%',
              }}
            >
              تسجيل دخول باستخدام جوجل
            </button>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: 'black',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                width: '48%',
              }}
            >
              تسجيل دخول باستخدام آبل
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              width: '45%',
              height: '1px',
              backgroundColor: '#A4A7AE',
            }}
          />
          <span
            style={{
              fontSize: '16px',
              color: '#535862',
              fontFamily: 'Lyon Arabic Display',
            }}
          >
            أو
          </span>
          <div
            style={{
              width: '45%',
              height: '1px',
              backgroundColor: '#A4A7AE',
            }}
          />
        </div>

        {/* نموذج التسجيل */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
          }}
        >
          {/* الاسم */}
          <input
            type="text"
            placeholder="أدخل اسمك"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              outline: 'none',
              borderRadius: '10px',
              backgroundColor: '#fff',
              textAlign: 'right',
              direction: 'rtl',
            }}
          />

          {/* البريد الإلكتروني */}
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              outline: 'none',
              borderRadius: '10px',
              backgroundColor: '#fff',
              textAlign: 'right',
              direction: 'rtl',
            }}
          />

          {/* كلمة المرور */}
          <input
            type="password"
            placeholder="أدخل كلمة المرور"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              outline: 'none',
              borderRadius: '10px',
              backgroundColor: '#fff',
              textAlign: 'right',
              direction: 'rtl',
            }}
          />

          {/* تأكيد كلمة المرور */}
          <input
            type="password"
            placeholder="أعد إدخال كلمة المرور"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              outline: 'none',
              borderRadius: '10px',
              backgroundColor: '#fff',
              textAlign: 'right',
              direction: 'rtl',
            }}
          />
        </div>

        {/* زر التسجيل */}
        <button
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '16px',
            backgroundColor: '#857FFF',
            color: 'white',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '30px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#6F61D2')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#857FFF')}
        >
          إنشاء حساب
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
