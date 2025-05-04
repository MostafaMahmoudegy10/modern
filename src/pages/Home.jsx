import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard'; // Assuming you have the ProductCard component

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = (label) => {
    const category = label === "Men" ? "men " : "women";
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );

  if (error) return (
    <div className="p-6 text-red-500 text-center">
      Error loading products: {error}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <section className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 md:p-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Discover Our Collection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Find the perfect products for your style and needs
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["Women", "Men"].map((label) => (
            <button
              key={label}
              onClick={() => handleCategoryClick(label)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Shop {label}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Featured Products</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No products available</p>
        )}
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Electronics', 'Clothing', 'Home', 'Beauty'].map((category) => (
            <div 
              key={category}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center cursor-pointer border border-gray-100 hover:border-indigo-200"
              onClick={() => navigate(`/category/${encodeURIComponent(category)}`)}
            >
              <div className="bg-indigo-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <span className="text-indigo-600 text-2xl">🛍️</span>
              </div>
              <h3 className="font-medium text-gray-800">{category}</h3>
              <p className="text-sm text-gray-500 mt-1">Shop now</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;