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
  active: true,
};

const mario = {
  name: 'Mario da Silva',
  age: 22,
  purchases: [
    { product: 'Notebook', price: 2500 },
    { product: 'Geladeira', price: 300 },
    { product: 'Guitarra', price: 400 },
    { product: 'Smartphone', price: 700 },
  ],
  active: false,
};

const App = () => {
  const dados = joana;

  const total_purchases = dados.purchases
    .map((item) => item.price)
    .reduce((a, b) => a + b);

  return (
    <>
      <p>Nome: {dados.name}</p>
      <p>Idade: {dados.age}</p>
      <p>
        Situação:
        <span style={{ color: dados.active ? 'green' : 'red' }}>
          {dados.active ? ' Ativa' : ' Inativa'}
        </span>
      </p>
      <p>Total: R$ {total_purchases}</p>
      {total_purchases > 10000 && <p>Você está gastando muito</p>}
      {/* O && é um operação que valida se a expressão é true or false; for true, executa o que vem depois, senão, não faz nada */}
    </>
  );
};

export default App;
