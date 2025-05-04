import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = 'http://localhost:8080/api/products';
        if (category) {
          url = `http://localhost:8080/api/products/category/${encodeURIComponent(category)}`;
        }
        
        const response = await axios.get(url);
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data || err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const handleCreate = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setProducts([response.data, ...products]);
      setShowForm(false);
      return true;
    } catch (err) {
      setError(err.response?.data || err.message);
      return false;
    }
  };

  const handleUpdate = async (id, formData) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setProducts(products.map(p => p.id === id ? response.data : p));
      setEditingProduct(null);
      return true;
    } catch (err) {
      setError(err.response?.data || err.message);
      return false;
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      setError(err.response?.data || err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          {category ? `منتجات ${category}` : 'قائمة المنتجات'}
        </h2>
        <button 
          onClick={() => {
            setEditingProduct(null);
            setShowForm(true);
          }}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          إضافة منتج جديد
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {showForm && (
        <div className="mb-6">
          <ProductForm 
            product={editingProduct}
            onCreate={handleCreate}
            onUpdate={handleUpdate}
            onCancel={() => {
              setEditingProduct(null);
              setShowForm(false);
            }}
          />
        </div>
      )}

      <div className="space-y-4">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onEdit={(product) => {
                setEditingProduct(product);
                setShowForm(true);
              }}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            لا توجد منتجات متاحة
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;