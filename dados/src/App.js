import './App.css';
import { useEffect, useState } from 'react';
import { Dado } from './components/Dado';
import {Placar} from './components/Placar';


function App() {
  const [desativo, setDesativo] = useState(true);

  const toggleDesativo = () => {
    setDesativo(!desativo);
    setCount(count+1);
  };

  const [count, setCount] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);


useEffect(() =>{
  if( count % 2 === 0){
    if(number1 >number2){
      setPlayer1(player1+1);
    } else if(number2>number1){
      setPlayer2(player2+1);
    }
  }
},[count]);



  return (
    <div className="App" style={{alignItems:'revert'}}>
      <header className="App-header">
        <h1>Jogue seu dado!</h1>
        
        <div style={{display : 'flex', justifyContent : 'space-between', gap : '50px'}}>
        <Dado condicao={desativo} toggleDesativo={toggleDesativo} setNumber={setNumber1} />
        <hr/>
        <Dado condicao={!desativo} toggleDesativo={toggleDesativo} setNumber ={setNumber2} />
        </div>
        <Placar  player1={player1} player2={player2}/>
      </header>
    </div>
  );
}

export default App;