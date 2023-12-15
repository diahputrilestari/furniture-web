import React, { useState, useEffect } from 'react';
import user from '../data/user.json'; // Importing local JSON file

const LocalJson = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(user); // Set the imported JSON data to state
  }, []);

  return (
    <div>
      <h2>Local JSON Example</h2>
      <ul>
        {jsonData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocalJson;
