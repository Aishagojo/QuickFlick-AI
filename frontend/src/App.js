import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieCard from "./page/MovieCard";
import Signup from "./components/Signup"; // ✅ make sure your signup page is inside /pages
import Footer from "./components/Footer"; // ✅ your custom footer component

const AppContent = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Load default popular movies
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/popular'); // backend route
        const data = await res.json();
        if (res.ok) {
          setSearchResults(data);
        }
      } catch (err) {
        console.error("Default movie fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDefaultMovies();
  }, []);

  // ✅ Handle search
  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://localhost:5000/api/search?q=${query}`);
      const data = await response.json();
      if (response.ok) {
        setSearchResults(data);
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const hideSearchBar = location.pathname === '/signup';

  return (
    <>
      <Navbar />
      {!hideSearchBar && <SearchBar onSearch={handleSearch} />}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
          <div className="p-4">
            {isLoading ? (
              <p className="text-center">Loading movies...</p>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {searchResults.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No movies found.</p>
            )}
          </div>
        } />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
