import './ListaStyle.css';

function Lista(props) {
  return (
    <section>
        <ul>
            {props.children}
        </ul>
    </section>
    
  );
}

export { Lista };