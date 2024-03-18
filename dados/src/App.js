import './App.css';
import { useState } from 'react';
import { Dado } from './components/Dado';


function App() {
  const [ativo, setAtivo] = useState(true);

  const toggleAtivo = () => {
    setAtivo(!ativo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jogue seu dado!</h1>
        <div style={{display : 'flex', justifyContent : 'space-between', gap : '50px'}}>
        <Dado condicao={!ativo} toggleAtivo={toggleAtivo}/>
        <hr/>
        <Dado condicao={ativo} toggleAtivo={toggleAtivo}/>
        </div>
      </header>
    </div>
  );
}

export default App;