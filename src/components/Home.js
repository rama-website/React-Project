// Home.js
import React, { useContext, useState, useEffect } from 'react';
import Character from './Character';
import Pagination from './Pagination';
import { CharacterContext } from '../contexts/CharactersContext';

const Home = () => {
  const { characters } = useContext(CharacterContext);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = characters.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(characters.length / recordsPerPage);

  useEffect(() => {
    // Additional logic can be added if needed
  }, [currentPage, characters]);

  return (
    <div>
      <div className='character-container'>
        {currentRecords.map((character, index) => (
          <Character character={character} key={index} />
        ))}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;



