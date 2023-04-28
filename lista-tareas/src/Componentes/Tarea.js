
import "../Styles/Tarea.css";

import { MdDeleteForever } from "react-icons/md";

const Tarea = (props) => {
  const estiloTarea =
    "tarea-contenedor " + (props.completada ? "completada" : "");

  return (
    <div className={estiloTarea}>
      <div
        className="tarea-texto"
        onClick={() => props.completarTarea(props.id)} >
        {props.texto}
      </div>
      <div
        className="tarea-contenedor-icono"
        onClick={() => props.eliminarTarea(props.id)} >
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default Tarea;
