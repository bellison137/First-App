// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerServiceWorker } from './serviceWorkerRegistration'; // Import registerServiceWorker

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Register the service worker using registerServiceWorker
registerServiceWorker(); // Call registerServiceWorker function
