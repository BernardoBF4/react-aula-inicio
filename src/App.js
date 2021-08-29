import React from 'react';

const joana = {
  name: 'Joana da Silva',
  age: 22,
  purchases: [
    { product: 'Notebook', price: 2500 },
    { product: 'Geladeira', price: 3000 },
    { product: 'Guitarra', price: 4000 },
    { product: 'Smartphone', price: 7000 },
  ],
};

const App = () => {
  const dados = joana;

  const total_purchases = dados.purchases
    .map((item) => item.price)
    .reduce((a, b) => a + b);

  console.log(total_purchases);

  return (
    <>
      <p>Nome: {dados.name}</p>
      <p>Idade: {dados.age}</p>
    </>
  );
};

export default App;
