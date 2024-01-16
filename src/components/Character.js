// Character.js
import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({ character }) => {
  if (!character) {
    return <div>No character data</div>;
  }

  const { firstName, lastName, imageUrl, id } = character;

  if (!firstName || !lastName || !imageUrl || !id) {
    return <div>Invalid character data</div>;
  }

  return (
    <Link to={`/characters/${id}`} className="character-link">
      <div className="character">
        <div className="character-text">
          {firstName} {lastName}
        </div>
        <img className="character-image" alt="character" src={imageUrl} />
      </div>
    </Link>
  );
};

export default Character;






