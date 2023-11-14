

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return ( /* This displays the seach bar and the search button on the browser */
    <div className='search-bar'>
      <h3>Search For Dog Breed</h3>  
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='btn btn-primary' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
