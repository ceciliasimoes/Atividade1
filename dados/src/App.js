import './App.css';
import { useEffect, useState } from 'react';
import { Dado } from './components/Dado';
import {Placar} from './components/Placar';


function App() {
  const [count, setCount] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  

  const [desativo, setDesativo] = useState(true);

  const toggleDesativo = () => {
    setDesativo(!desativo);
    setCount(prevCount => prevCount + 1);
  };



  useEffect(() => {
    if (count % 2 === 0) {
      if (number1 > number2) {
        setPlayer1(player1 + 1);
      } else if (number2 > number1) {
        setPlayer2(player2 + 1);
      }
    }
  }, [count, number1, number2]);


useEffect(() => {
  if ((count / 2) === 5) {
    if (player1 > player2) {
      alert("O jogador 1 venceu!");
    } else if (player2 > player1) {
      alert("O jogador 2 venceu!");
    }
    }
  }, [player1, player2, count]);

  const handleRestart = () => {
    setPlayer1(0);
    setPlayer2(0);
    setCount(0);
  };

 let partida = Math.round(count/2);


  return (
    <div className="App" style={{alignItems:'revert'}}>
      <header className="App-header">
        <h1>Jogue seu dado!</h1>
        <h2>Melhor de cinco! Essa é a partida <strong>{partida}ª</strong>!</h2>
        
        <div style={{display : 'flex', justifyContent : 'space-between', gap : '50px'}}>
        <Dado condicao={desativo} toggleDesativo={toggleDesativo} setNumber={setNumber1} />
        <hr/>
        <Dado condicao={!desativo} toggleDesativo={toggleDesativo} setNumber ={setNumber2} />
        </div>
        <Placar  player1={player1} player2={player2}/>
        {partida === 5 && (
          <button onClick={handleRestart} style={{borderRadius :'10px', border: 'none', padding: '30px', fontSize:'30px', color:'Purple'}}>Reiniciar partida</button>
        )}

      </header>
    </div>
  );
}

export default App;
