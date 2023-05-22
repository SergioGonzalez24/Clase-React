import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Timer } from './Componentes/Timer';
import { Marcadores, Marcardores } from './Componentes/Marcadores';

function App() {
  useEffect(() => {
    console.log('montando componente');
  }, []);

  return (
    <div className="App">
      {console.log('rendereando...')}
      hola mundo

      <Timer />
      <Marcardores />
    </div>

  );
}

export default App;
