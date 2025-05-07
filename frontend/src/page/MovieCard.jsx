import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if media_type exists and render appropriate type (movie or tv)
  const mediaType = movie.media_type === 'movie' ? 'Movie' : 'TV Series';

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">{movie.title || movie.name}</h2> {/* Use 'name' for series */}
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || movie.name}
          className="w-full h-64 object-cover rounded mb-3"
        />
      ) : (
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-600 rounded mb-3">
          No Image
        </div>
      )}

      {/* Display Overview, depending on whether it's a movie or series */}
      <p className="text-sm text-gray-600 mb-2">
        {showSpoiler
          ? movie.overview || 'No spoiler summary available.'
          : movie.overview || 'No clean summary available.'}
      </p>

      {/* Show media type (Movie or TV Series) */}
      <p className="text-xs text-gray-500 italic">{mediaType}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        <button
          onClick={() => setShowSpoiler(!showSpoiler)}
          className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded text-sm"
        >
          {showSpoiler ? 'Hide Spoiler' : 'Show Spoiler'}
        </button>
        <button
          onClick={() => alert('AI recap coming soon!')}
          className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
        >
          Watch
        </button>
        <button
          onClick={() => alert('Audio recap coming soon!')}
          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm"
        >
          Listen
        </button>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`px-3 py-1 rounded text-sm ${
            isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200'
          }`}
        >
          {isFavorite ? '♥ Favorited' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
