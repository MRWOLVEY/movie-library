import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';

const SearchComponent = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        searchMovies(searchTerm);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchTerm, searchMovies]); // Dependencies array to update the effect when searchTerm or searchMovies changes

  return (
    <>
    <div className="search">
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}/>
                
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}/>
                    
            </div>
    </>
  );
};

export default SearchComponent;
