import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoged,setIsLoged]=useState(true);
  let log=(
    <Link to="/login" className="text-white hover:bg-white/20">
    Login
  </Link>
  );
  if(isLoged!=true){
    <Link to="/signup" className="text-white hover:bg-white/20">
    Signup
  </Link>
  }
  return (
    <div className="bg-gradient-to-r from-stone-900 to-stone-700 text-stone-100">
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl text-white">
            Hamsa
          </Link>
        </div>

        <div className="flex-none md:hidden">
          <button
            className="btn btn-square btn-ghost text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="text-white hover:bg-white/20">
                Home
              </Link>
            </li>
            <li>
              <Link to="/wislist" className="text-white hover:bg-white/20">
                wislist
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:bg-white/20">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:bg-white/20">
                Contact
              </Link>
            </li>
            <li>
              {log}
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-stone-800 z-50 shadow-lg">
            <ul className="menu p-4 w-full">
              <li>
                <Link
                  to="/"
                  className="text-white hover:bg-white/20 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/wislist"
                  className="text-white hover:bg-white/20 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  wislist
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:bg-white/20 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={isLoged?'/login':'/signup'}
                  className="text-white hover:bg-white/20 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isLoged?'login':'signup'}
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* الأيقونات اليمنى (السلة والمستخدم) */}
        <div className="flex-none gap-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item bg-red-500 border-none">8</span>
              </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content z-[1] mt-3 w-52 bg-white shadow text-gray-800">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to="/cart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] mt-3 w-52 p-2 shadow bg-white rounded-box text-gray-800">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge bg-blue-500 text-white">New</span>
                </Link>
              </li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;