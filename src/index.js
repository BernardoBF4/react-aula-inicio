import React from 'react';
import ReactDOM from 'react-dom';
import { FirstStep, List, Books, ShowOff, Button } from './FirstSteps';
import Title from './Title';
import App from './App';
import Form from './Form/Form';

ReactDOM.render(
  <React.StrictMode>
    <Form />
    {/* <Title text="Meu título 1" color="green" />{' '} */}
    {/* Importante que a propriedade tenha o mesmo nome que foi utilizado na definição do componente */}
    {/* <Title text="Meu título 2" color="blue" /> */}
    {/* <App />
    <App />
    <FirstStep />
    <List />
    <Books />
    <ShowOff />
    <Button /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
