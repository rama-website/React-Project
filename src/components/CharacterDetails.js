// CharacterDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ThronesApi.com/api/v2/Characters/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch character details');
        }
        const data = await response.json();
        console.log('API Response:', data); // Add this line for additional logging
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!character) {
    return <div>Loading character details...</div>;
  }

  const { firstName, lastName, imageUrl, title, family } = character;

  return (
    <div className="character-details">
      <h2>{firstName} {lastName}</h2>
      <img className="character-image" alt="character" src={imageUrl} />
      <p>{title ? `Title: ${title}` : 'Title: Not available'}</p>
      <p>{family ? `Family: ${family}` : 'Family: Not available'}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default CharacterDetails;





