import React from 'react';

// As props abaixo estão espalhadas para que seja possível pegar qualquer outra propriedade que foi definida
// antes de ...props, como label e id, e jogar elas no componete (utiliza o operador spread)

const Input = ({ label, id, ...props }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input;
