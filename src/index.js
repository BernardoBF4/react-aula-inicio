import React from 'react';
import ReactDOM from 'react-dom';
import { FirstStep, List, Books, ShowOff, Button } from './FirstSteps';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <App />
    <List />
    <Books />
    <ShowOff />
    <Button /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
