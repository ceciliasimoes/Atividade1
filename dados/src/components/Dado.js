import React, { useState } from 'react';

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
      <img src={`../images/dado${dado}.png`} alt={`Dado ${dado}`} />
      <h2>Seu número foi : {dado}</h2>
      <button onClick={jogarDado} disabled={condicao} style={{borderRadius :'10px', border: 'none', padding: '20px', fontSize:'20px', color:'Purple'}}>Jogar dado</button>
      </div> 
    </>
  );
}
