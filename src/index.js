import React from 'react';
import ReactDOM from 'react-dom';
import { App, List, Books, ShowOff } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <List />
    <Books />
    <ShowOff />
  </React.StrictMode>,
  document.getElementById('root')
);
