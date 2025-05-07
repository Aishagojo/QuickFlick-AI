// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">QuickFlick</h2>
          <p className="text-sm text-gray-400">
            Your go-to platform for smart movie recaps and entertainment.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/signup" className="hover:text-white">Sign Up</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-400">
            support@quickflick.ai  
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Nairobi, Kenya
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} QuickFlick — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
