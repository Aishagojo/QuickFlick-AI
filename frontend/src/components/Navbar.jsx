import React from 'react';
import   {Link } from 'react-router-dom';
 

const Navbar = () => {
  return(
    <nav className="big-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className= "text-2xl font-bold text-blue-700">
        QuickFlickAi</Link>
        <Link 
        to="/singup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          singup
        </Link>
      </div>
    </nav>
  );

};

export default Navbar;