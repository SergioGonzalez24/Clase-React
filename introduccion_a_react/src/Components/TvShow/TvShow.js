
import './TvShowStyle.css';


function TvShow(props) {
    return (

      <li className='TvShowStyle'>
        <div>
         <div>
            <img src={ props.imagen} alt={ props.altDesc} />
        </div>
        <br />
        <h1>{ props.titulo }</h1>
        <div>
        
            <p>{ props.texto }</p>
        </div>
        </div>
      </li>
    );
  }

  export { TvShow };