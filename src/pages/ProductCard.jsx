import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-300 focus-within:ring-2 focus-within:ring-indigo-200"
      onClick={() => navigate(`/product/${product.id}`)}
      tabIndex={0}
      role="button"
      aria-label={`View ${product.name} details`}
    >
      <div className="relative h-64 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img 
          src={`http://localhost:8080/api/products/${product.id}/image`}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        
        {/* Category Badge */}
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
          product.category === 'Women' 
            ? 'bg-pink-500/90 text-white' 
            : 'bg-indigo-500/90 text-white'
        } transition-colors duration-300`}>
          {product.category}
        </span>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1 font-sans">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-700">
            {product.price.toFixed(2)} 
          </span>
          <button 
            className="group text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-200 rounded-md"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/products/${product.id}`);
            }}
            aria-label={`View details for ${product.name}`}
          >
            <span className="flex items-center gap-1">
              View Details
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;