import React from 'react';
import { TvShow } from './Components/TvShow/TvShow.js';
import { Lista } from './Components/Lista/Lista.js';
import './App.css';



const infoProgramas = [
  {titulo: 'Pistas de Blue', 
  alttDesc: 'Pistas de Blue',
  texto: '¿Como te sientes hoy Blue? Preparate para acompañar a este iconico perrito a resolver divertidos misterios.', 
  imagen: 'https://is5-ssl.mzstatic.com/image/thumb/NtxMuEYj5hsBrfBh_R0y_A/2000x1125.jpg'},

  {titulo: 'Bluey',
  alttDesc: 'Bluey',
  texto:'¿Como te sientes hoy Blue? Preparate para acompañar a este iconico perrito a resolver divertidos misterios.', 
  imagen: 'https://www.newidea.com.au/media/62308/mainres.jpg'},

  {titulo: 'Peppa Pig',
  alttDesc: 'Peppa Pig', 
  texto: '¿Como te sientes hoy Blue? Preparate para acompañar a este iconico perrito a resolver divertidos misterios.', 
  imagen: 'https://www.gratistodo.com/wp-content/uploads/2016/08/peppa-pig-serie-tv-descargar-imagenes-gratis.jpg'},

  {titulo: 'Paw Patrol', 
  alttDesc: 'Paw Patrol',
  texto: '¿Como te sientes hoy Blue? Preparate para acompañar a este iconico perrito a resolver divertidos misterios.', 
  imagen: 'https://www.gamerroof.com/wp-content/uploads/2019/05/Paw-Patrol-Full-Version-Free-Download.jpeg'}
]

function App() {
  return (
    <React.Fragment>
      <Lista>
        {infoProgramas.map(infoPrograma => (<TvShow titulo = {infoPrograma.titulo} texto = {infoPrograma.texto} imagen = {infoPrograma.imagen} />))}
      </Lista>
    </React.Fragment>
  );

}

export default App;
