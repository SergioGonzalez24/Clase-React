/*
Author: Sergio Gonzalez
Description: This is Boton.js. It contains the logic for the button component.
*/



import '../Styles/Boton.css'

function Boton(props) {
    return (
        <button className="Boton-tenis" onClick={props.onClick}>
            {props.texto}
        </button>
    );
}

export { Boton };