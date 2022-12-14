import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import initializeFirebase from './utils/firebase.config';

initializeFirebase();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
