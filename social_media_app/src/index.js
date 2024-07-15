// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS (if any)
import App from './App';


// Create a root and render the App component into the HTML element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
