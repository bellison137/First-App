// src/App.js
import React from 'react';
import './App.css';
//import Header from './components/Header'; 
// BELOW THE H1 STUFF THE LINE WAS: <Header/> 
import DogAPI from './components/DogAPI';
import DraggableBall from './DraggableBall';

function App() {
  return (
    <div className="App">
      <h1> hello this is my Fifth react app </h1>
      <h1>My Dog API</h1>
      <DogAPI />
      <h1>Draggable Ball</h1>
      <DraggableBall />
    </div>
  );
}

export default App;
