import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

console.log(React);

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Está ativo</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <>
      <Teste />
      <Header />
      Meu App
      <Form />
      <Footer />
    </>
  );
};

export default App;
