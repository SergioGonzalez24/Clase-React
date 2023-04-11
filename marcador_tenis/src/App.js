import './App.css';
import { Titulo }  from './Componentes/Titulo.js';
import { Puntos }  from './Componentes/Puntos.js';
import { Boton }  from './Componentes/Boton.js';

import { useState } from 'react';





function App() {
  const [puntosA, setPuntosA] = useState(0);
  const [puntosB, setPuntosB] = useState(0);

  /* Handlers para los botones */
  const onClickHandlerA = (event) => {
    setPuntosA(puntosA + 1);  
    console.log(puntosA);
    };
    const onClickHandlerB = (event) => {
    setPuntosB(puntosB + 1);
    console.log(puntosB);
    };
    const onClickHandlerReset = (event) => {
    setPuntosA(0);
    setPuntosB(0);
    console.log("Reset");
    };

  return (
    <div className="App">
      <Titulo texto="Jugador A" />
      <Puntos puntos={puntosA} />
      <Titulo texto="Jugador B" />
      <Puntos puntos={puntosB} />

      <Boton texto="Punto de A" onClick={onClickHandlerA}/>
      <Boton texto="Punto de B" onClick={onClickHandlerB}/>
      <Boton texto="Reiniciar" onClick={onClickHandlerReset}/>

    </div>
  );
}

export default App;
