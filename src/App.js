// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import DogAPI from './components/DogAPI';
import DraggableBall from './DraggableBall';

function App() {
  return (
    <div className="App">
      <h1> hello this is my second react app </h1>
      <Header />
      <h1>My Dog API</h1>
      <DogAPI />
      <h1>Draggable Ball</h1>
      <DraggableBall />
    </div>
  );
}

export default App;
