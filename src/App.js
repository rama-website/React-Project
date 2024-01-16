// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetails from './components/CharacterDetails';
import { CharacterProvider } from './contexts/CharactersContext';

function App() {
  return (
    <div >
    <Router className="App">
      <div className='title'>
      <h1>Game of Throns</h1>
      </div>
      
      <CharacterProvider>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
        </Routes>
      </CharacterProvider>
    </Router>
    </div>
  );
}

export default App;


