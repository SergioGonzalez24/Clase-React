import '../Styles/Titulo.css';

function Titulo(props) {
    return (
        <div className="Titulo-tenis">
            { props.texto }
        </div>
    )
}

export { Titulo };