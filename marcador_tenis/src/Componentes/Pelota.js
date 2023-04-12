/*
Author: Sergio Gonzalez
Description: This is Pelota.js. It contains the logic for the ball component.
*/

import OffBall from '../assets/OffBall.png';
import OnBall from '../assets/onBall.png';
import '../Styles/Pelota.css';

function PelotaON() {
  return(
    <div className="imgPelota imgPelotaOn">
         <img className="imgPelota" src={ OnBall } alt="OnBall" />
    </div>
  );
}

function PelotaOFF() {
  return(
    <div className="imgPelota imgPelotaOff">
        <img className="imgPelota" src={ OffBall } alt="OffBall"/>
    </div>
  );
}

export { PelotaON, PelotaOFF };
