import React from 'react';

const Title = ({ color, text }) => {
  return <h1 style={{ color: color }}>{text}</h1>; // Essa propriedade 'text' será definida dentro da chamada do componente, quando passarmos o valor para ela
};

export default Title;
