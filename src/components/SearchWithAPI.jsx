import React, { useState, useEffect } from 'react';
// import { data } from '../data/data.js';

const SearchWithAPI = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulated API call using a placeholder API
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setSearchResults(data);
        setError(null);
      } catch (error) {
        setSearchResults([]);
        setError('Error fetching data. Please try again.');
      }
    };

    if (searchTerm.trim() !== '') {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
      {error && <p>{error}</p>}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchWithAPI;
