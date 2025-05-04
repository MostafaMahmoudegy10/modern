import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Product = ({ onClose }) => {
  const { id } = useParams(); // الحصول على الـ id من الـ URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // جلب بيانات المنتج من السيرفر باستخدام الـ id
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('حدث خطأ أثناء تحميل البيانات');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // التحديث عند تغير الـ id في الـ URL

  // في حالة التحميل أو وجود خطأ
  if (loading) {
    return <div>جاري تحميل المنتج...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>المنتج غير موجود</div>;
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto relative flex m-8">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        onClick={onClose}
        aria-label="Close details"
      >
        ✕
      </button>

      {/* الجزء الخاص بالصورة */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center overflow-hidden rounded-xl mb-4">
        <img
          src={`http://localhost:8080/api/products/${product.id}/image`}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
          }}
        />
      </div>

      {/* الجزء الخاص بالمعلومات */}
      <div className="w-1/2 pl-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-indigo-700">
            {product.price.toFixed(2)} جنيه
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
            product.category === 'Women' 
              ? 'bg-pink-500/90 text-white' 
              : 'bg-indigo-500/90 text-white'
          }`}>
            {product.category}
          </span>
        </div>
        <button
          className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          onClick={() => navigate(-1)} // العودة للصفحة السابقة
        >
          Back to Card
        </button>
      </div>
    </div>
  );
};

export default Product;
