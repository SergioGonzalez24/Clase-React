import { useRef } from "react";
import "../Styles/CapturaTarea.css";
import { v4 as uuidv4 } from "uuid";

const CapturaTarea = (props) => {
  const descripcionTarea = useRef();

  // Función que maneja el envío del formulario de captura de tareas
  const agregarTareaHandler = (event) => {
    event.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: descripcionTarea.current.value,
      completada: false,
    };
    props.onSubmit(tareaNueva);
    // Reseteamos el valor del input después de enviar el formulario
    descripcionTarea.current.value = "";

    console.log(tareaNueva);
  };

  return (
    <form className="tarea-forma" onSubmit={agregarTareaHandler}>
      <input
        ref={descripcionTarea}
        className="tarea-input"
        type="text"
        placeholder="Escribe la nueva tarea"
        name="texto"
        // Agregamos un atributo "required" para que el input no esté vacío al enviar el formulario
        required
      />
      <button className="tarea-boton-agregar">Agregar tarea</button>
      <button
        className="tarea-boton-cancelar"
        type="button"
        onClick={() => props.onCancel()}
      >
        Cancelar
      </button>
    </form>
  );
};

export default CapturaTarea;
