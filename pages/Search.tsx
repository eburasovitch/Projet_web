// pages/Search.tsx

import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from '@/components/MovieCard';
import { MovieInterface } from '@/types';
import useMovieList from '@/hooks/useMovieList';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<MovieInterface[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?title=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const { data: movies = [] } = useMovieList();
  
  return (
    <div>
      <Navbar />
      <div className="container mx-auto ">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className="flex justify-center ">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2"
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white p-2 ml-2">
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-40">
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
        
        <div className="pb-40 mt-24">
          <MovieList title="Trending Now" data={movies} />
        </div>
      </div>
    </div>
  );
};

export default Search;
