/*
Author: Sergio Gonzalez
Description: This is the main component of the app. It contains the logic for the game and the UI.
*/


import "./App.css";
import { Titulo } from "./Componentes/Titulo.js";
import { Puntos } from "./Componentes/Puntos.js";
import { Boton } from "./Componentes/Boton.js";
import { PelotaOFF, PelotaON } from "./Componentes/Pelota";

import { useEffect, useState } from "react";

const puntajes = {
  0: "15",
  1: "30",
  2: "40",
};

function App() {
  const [puntosA, setPuntosA] = useState(0);
  const [puntosB, setPuntosB] = useState(0);

  const [puntajeA, setPuntajeA] = useState(0);
  const [puntajeB, setPuntajeB] = useState(0);

  const [juegosGanadosA, setJuegosGanadosA] = useState(0);
  const [juegosGanadosB, setJuegosGanadosB] = useState(0);

  /* Handlers para los botones */
  const onClickHandlerA = (event) => {
    setPuntosA(puntosA + 1);
    setPuntajeA(puntajes[puntosA]);
  };

  const onClickHandlerB = (event) => {
    setPuntosB(puntosB + 1);
    setPuntajeB(puntajes[puntosB]);
  };

  const onClickHandlerReset = (event) => {
    setPuntosA(0);
    setPuntosB(0);
    setPuntajeA(0);
    setPuntajeB(0);
  };

  const onClickHandlerResetJuego = (event) => {
    setPuntosA(0);
    setPuntosB(0);
    setPuntajeA(0);
    setPuntajeB(0);
    setJuegosGanadosA(0);
    setJuegosGanadosB(0);
  };

  useEffect(() => {
    // Check for tenis advantage
    if (puntosA >= 3 && puntosB >= 3) {
      if (puntosA === puntosB) {
        setPuntajeA("Deuce");
        setPuntajeB("Deuce");
      } else if (puntosA > puntosB) {
        setPuntajeA("Advantage");
        setPuntajeB("40");
      } else {
        setPuntajeB("Advantage");
        setPuntajeA("40");
      }
    }
    // Check for tenis winner
    if (puntosA >= 4 && puntosA - puntosB >= 2) {
      setPuntajeA("Ganador");
      setPuntajeB("Perdedor");
    } else if (puntosB >= 4 && puntosB - puntosA >= 2) {
      setPuntajeB("Ganador");
      setPuntajeA("Perdedor");
    }

    // After the game is over, reset the points and add a game to the winner
    if (puntajeA === "Ganador" || puntajeB === "Ganador") {
      setPuntosA(0);
      setPuntosB(0);
      setPuntajeA(0);
      setPuntajeB(0);
      if (puntajeA === "Ganador") {
        setJuegosGanadosA(juegosGanadosA + 1);
      } else {
        setJuegosGanadosB(juegosGanadosB + 1);
      }
    }

    // Check for game winner and alert the winner
    if (juegosGanadosA === 6 || juegosGanadosB === 6) {
      const alertMsg =
        "El juego ha terminado" +
        "\nJugador A: " +
        juegosGanadosA +
        " juegos" +
        "\nJugador B: " +
        juegosGanadosB +
        " juegos" +
        "\nEl ganador es: " +
        (juegosGanadosA > juegosGanadosB ? "Jugador A" : "Jugador B");

      alert(alertMsg);
      const alertBox = document.createElement("div");
      alertBox.classList.add("game-end-alert");
      alertBox.textContent = alertMsg;
      document.body.appendChild(alertBox);

      onClickHandlerResetJuego();
    }
  }, [puntosA, puntosB, puntajeA, puntajeB, juegosGanadosA, juegosGanadosB]);

  return (
    <div className="App">
      <table>
        <Titulo texto="Puntos" />
        <tr>
          <td>
            <Titulo texto="Jugador A" />
          </td>
          <td>{juegosGanadosA >= 1 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosA >= 2 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosA >= 3 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosA >= 4 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosA >= 5 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>
            <Puntos puntos={puntajeA} />
          </td>
        </tr>

        <tr>
          <td>
            <Titulo texto="Jugador B" />
          </td>
          <td>{juegosGanadosB >= 1 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosB >= 2 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosB >= 3 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosB >= 4 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosB >= 5 ? <PelotaON /> : <PelotaOFF />}</td>

          <td>
            <Puntos puntos={puntajeB} />
          </td>
        </tr>
      </table>

      <br />

      <Boton texto="Punto de A" onClick={onClickHandlerA} />
      <Boton texto="Punto de B" onClick={onClickHandlerB} />

      <Boton texto="Reiniciar" onClick={onClickHandlerReset} />
      <Boton texto="Reiniciar Juego" onClick={onClickHandlerResetJuego} />
    </div>
  );
}

export default App;
