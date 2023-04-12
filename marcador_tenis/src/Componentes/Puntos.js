/*
Author: Sergio Gonzalez
Description: This is Puntos.js. It contains the logic for the points component.
*/

import '../Styles/Puntos.css'


function Puntos(props) {
    return (
        <div className="Puntos-tenis">
            { props.puntos }
        </div>
    )
}

export { Puntos };