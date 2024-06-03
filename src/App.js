import logo from './logo.svg';
import './App.css';
// src/App.js
// // <h1> hello this is my first react app </h1>
import React from 'react';
import './App.css';
import Header from './components/Header';
import DogAPI from './components/DogAPI';

function App() {
  return (
    <div className="App">
    <h1> hello this is my first react app </h1>
    <Header />
    <h1>My Dog API</h1>
      <DogAPI />
    </div>
  );
}

export default App;

