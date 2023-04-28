
import { Fragment, useState } from "react";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import "../Styles/ListaTareas.css";
import { RiAddCircleFill } from "react-icons/ri";

const ListaTareas = (props) => {
  // Estado para indicar si se está capturando una nueva tarea
  const [estaCapturando, setEstaCapturando] = useState(false);

  // Estado para almacenar las tareas
  const [tareas, setTareas] = useState([]);

  // Función para agregar una tarea
  const agregarTarea = (tarea) => {
    if (tarea.texto.length > 0) {
      const nuevasTareas = [tarea, ...tareas];
      setTareas(nuevasTareas);
    }
    setEstaCapturando(false);
  };

  // Función para completar una tarea
  const completarTarea = (id) => {
    const nuevasTareas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(nuevasTareas);
  };

  // Función para eliminar una tarea
  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(nuevasTareas);
  };

  // Función para mostrar el formulario de captura de tareas
  const mostrarFormularioCaptura = () => {
    setEstaCapturando(true);
  };

  // Función para ocultar el formulario de captura de tareas
  const ocultarFormularioCaptura = () => {
    setEstaCapturando(false);
  };

  return (
    <Fragment>
      {/* Formulario de captura de tareas */}
      {estaCapturando && (
        <CapturaTarea onSubmit={agregarTarea} onCancel={ocultarFormularioCaptura} />
      )}

      {/* Botón para mostrar el formulario de captura de tareas */}
      {!estaCapturando && (
        <button onClick={mostrarFormularioCaptura} className="captura-boton">
          <RiAddCircleFill /> Agregar tarea
        </button>
      )}

      {/* Lista de tareas */}
      <div className="lista-tareas-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
        {tareas.length === 0 && <p>No hay tareas</p>}
      </div>
    </Fragment>
  );
};

export default ListaTareas;
