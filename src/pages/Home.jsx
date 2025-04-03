import React from 'react';
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/5 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-900 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Categories
          </h3>
          <ul className="space-y-4">
            {[
              { name: "Women's Clothing", icon: "👚" },
              { name: "Men's Clothing", icon: "👔" },
              { name: "Jewelry & Watches", icon: "💎" },
              { name: "Bags & Shoes", icon: "👜" },
              { name: "Scarves", icon: "🧣" },
              { name: "New Collection", icon: "🆕" },
              { name: "Best Selling", icon: "🔥" },
              { name: "View All", icon: "👀" }
            ].map((item) => (
              <li 
                key={item.name}
                className="flex items-center cursor-pointer hover:text-red-600 transition-colors py-2 px-3 rounded-lg hover:bg-red-50 font-medium text-gray-700"
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="w-full lg:w-4/5 space-y-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="New Collection" 
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center pl-12 md:pl-16">
              <div className="text-white max-w-md">
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-2 inline-block">New Arrivals</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Spring Collection 2023</h2>
                <p className="text-gray-200 mb-6">Discover our fresh new styles for the season</p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'All Items', 
                subtitle: 'Browse all products',
                img: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
              },
              { 
                title: 'Best Selling', 
                subtitle: 'Top rated products',
                img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
              },
              { 
                title: 'Sale', 
                subtitle: 'Limited time offers',
                img: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
              }
            ].map((product, index) => (
              <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-72 object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">{product.title}</h3>
                  <p className="text-gray-200 mb-4">{product.subtitle}</p>
                  <button className="self-start bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors transform group-hover:translate-x-2 duration-300">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl shadow-inner">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Join Our Newsletter</h3>
                <p className="text-gray-600 mb-4">Get 15% off your first order and updates on new arrivals</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-r-lg transition-colors font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                  alt="Special Offer" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;