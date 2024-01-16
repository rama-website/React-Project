// CharacterContext.js
import React, { createContext, useState, useEffect } from 'react';

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ThronesApi.com/api/v2/Characters');
        if (!response.ok) {
          throw new Error('Failed to fetch character data');
        }
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContext, CharacterProvider };
