import '../Styles/Boton.css'

function Boton(props) {
    return (
        <button className="Boton-tenis" onClick={props.onClick}>
            {props.texto}
        </button>
    );
}

export { Boton };