import React from 'react';

const LearningAnalysis = ({
  title = 'تحليل طريقة تعلم كل طالب',
  description = 'عند تسجيل الطالب، يسوي اختبار أو يجاوب على استبيان.\nالنظام يحلل إجابات الطالب ويحدد أسلوب تعلمه (بصري، سمعي، حركي...).',
  imageUrl = '',
}) => {
  return (
    <div
      data-layer="Frame 11"
      className="Frame11"
      style={{
        width: '80%',  // تقليص الحجم العام
        height: 'auto', 
        display: 'flex', // استخدام flex للتنظيم بشكل أفقي
        flexDirection: 'row-reverse', // جعل الصورة في الجهة اليمنى والنص في الجهة اليسرى
        alignItems: 'center', // محاذاة العناصر في المنتصف
        justifyContent: 'space-between', // ترك مسافة بين الصورة والنص
        margin: '0 auto', // تركز المحتوى
        padding: '20px', // إضافة مسافة داخلية
        direction: 'rtl', // تحديد الاتجاه لكتابة النص من اليمين لليسار
      }}
    >
      {/* Image container */}
      <div
        data-layer="image"
        className="Image"
        style={{
          width: 250,  // تقليص حجم الصورة
          height: 230,  // تقليص ارتفاع الصورة
          background: imageUrl ? `url(${imageUrl}) center/cover no-repeat` : '#C4C4C4',
          borderRadius: '16px', // إضافة زوايا دائرية للصورة
          border: '6px solid #6E53A8', // إضافة إطار حول الصورة
          marginLeft: '200px', // تقليص المسافة بين الصورة والنص
        }}
      />
      {/* Text container */}
      <div
        data-layer="Frame 10"
        className="Frame10"
        style={{
          flex: 1, // جعل النص يأخذ المساحة المتبقية
          paddingLeft: 20,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start', // محاذاة النصوص لليسار (من خلال rtl المحاذاة ستصبح من اليمين)
          gap: 10, // تقليص المسافة بين النصوص
          display: 'flex',
        }}
      >
        {/* Title */}
        <div
          data-layer="title"
          style={{
            textAlign: 'right', // محاذاة النص لليمين
            color: '#53389E',
            fontSize: 24, // تصغيرdivم الخط
            fontFamily: 'Lyon Arabic Display',
            fontWeight: '500',
            lineHeight: '30px',
            wordWrap: 'break-word',
          }}
        >
          {title}
        </div>
        {/* Description */}
        <div
          data-layer="description"
          style={{
            textAlign: 'right', // محاذاة النص لليمين
            color: '#9747FF',
            fontSize: 18, // تصغير حجم الخط
            fontFamily: 'Lyon Arabic Display',
            fontWeight: '500',
            lineHeight: '24px',
            wordWrap: 'break-word',
            whiteSpace: 'pre-line', // عشان يحترم \n
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default LearningAnalysis;
