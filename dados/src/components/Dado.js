import React, { useState } from 'react';
const dados = [
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado1.png?v=1709855087643",
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado2.png?v=1709855088164",
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado3.png?v=1709855088659",
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado4.png?v=1709855089180",
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado5.png?v=1709855089711",
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado6.png?v=1709855090308",
];


export function Dado({condicao, toggleAtivo}) {
  const [dado, setDado] = useState(Math.floor(Math.random() * 6) + 1);

  const jogarDado = () => {
    const numero = Math.floor(Math.random() * 6) + 1;
    setDado(numero);
    toggleAtivo();
  }
  
 
  
  return (
    <>
    <div style={{justifyContent : 'center'}}>
      <img src={dados[dado-1]} alt={`Dado ${dado}`} />
      <h2>Seu número foi : {dado}</h2>
      <button onClick={jogarDado} disabled={condicao} style={{borderRadius :'10px', border: 'none', padding: '20px', fontSize:'20px', color:'Purple'}}>Jogar dado</button>
      </div> 
    </>
  );
}
