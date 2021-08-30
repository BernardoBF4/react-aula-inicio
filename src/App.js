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

const List = () => {
  let movies = ['Transformers', 'LOTR', 'Velozes e Furiosos'];
  movies = movies.map((item) => <li key={item}>{item}</li>); // The 'key' is important because it will provide an identity to each eleemnt of the array, making it lighter for changing the array, for React won't have to compile everything once again; only what's been changed.

  return <ul>{movies}</ul>;
};

const Books = () => {
  const books = [
    { name: 'A Game of Thrones', year: 1996 },
    { name: 'A Clash of Kings', year: 1998 },
    { name: 'A Storm of Swords', year: 2000 },
  ];

  return (
    <ul>
      {books
        .filter((book) => book.year >= 1998)
        .map(({ name, year }) => (
          <li key={year}>{name}</li>
        ))}
    </ul>
  );
}; // Aqui foi possível desestrutura o item passado para o 'map' para usar os atributos dele ao invés de usar 'item.atributo'. O filter é usado com map para filtrar somente o conteúdo que quero com a formatação que quero retornar para minha <ul>

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const ShowOff = () => {
  const products = produtos
    .filter((item) => +item.preco.replace('R$ ', '') > 1500)
    .map((item) => (
      <div key={item.id}>
        <h2>{item.nome}</h2>
        <p>Preço: {item.preco}</p>
        <ul>
          {item.cores.map((cor) => (
            <li style={{ backgroundColor: cor, color: 'white' }}>{cor}</li>
          ))}
        </ul>
      </div>
    ));

  return <div>{products}</div>;
};

export { App, List, Books, ShowOff }; // As I am exporting two elements, I need to put them into an object, what will make necessary for me to destructure them when importing them on index.js
