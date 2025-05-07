// server.js or app.js (or any backend entry file)
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load .env file

const app = express();
app.use(cors()); // Enable CORS for the backend

const TMDB_API_KEY = process.env.TMDB_API_KEY; // Ensure this is in your .env file

// Define the '/api/search' route to handle movie search queries
app.get('/api/search', async (req, res) => {
  const query = req.query.q; // Extract search query from the URL

  console.log(`Received search query: ${query}`); // Log the search query to the console

  // Check if query exists, else return an error
  if (!query) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  try {
    // Make a request to TMDb API with the search query
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
    );
    
    // Parse the response from the TMDb API
    const data = await response.json();
    console.log('Fetched data:', data); // Log the data fetched from TMDb
    
    // Send the results as a JSON response
    res.json(data.results); // Send only the results part of the response
  } catch (error) {
    // Catch any errors and return a 500 error to the frontend
    console.error('Error fetching from TMDB:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
