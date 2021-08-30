import React from 'react';
import ReactDOM from 'react-dom';
import { App, List, Books } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <List />
    <Books />
  </React.StrictMode>,
  document.getElementById('root')
);
