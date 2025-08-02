let listaTareas = [];

const seccionAgregarTarea = document.querySelector(".container-input");
const botonAgregarTarea = document.getElementById("boton-agregar-tarea");
const containerTareas = document.querySelector(".container-tareas");
const input = document.getElementById("nueva-tarea");

const validarTarea = (tarea) => {
  // eliminar mensajes de advertencia existentes
  const mensajeExistente = seccionAgregarTarea.querySelector(".invalid");
  if (mensajeExistente) {
    mensajeExistente.remove();
  }

  const validacion = document.createElement("p");
  validacion.classList.add("text-danger", "text-start", "invalid");
  
  // validar que no se ingrese una tarea vacía
  if (tarea.length === 0) {
    validacion.textContent = "No se puede ingresar una tarea vacía";
    seccionAgregarTarea.appendChild(validacion);
    return false;
  }
  // validar que no se ingrese una tarea repetida
  if (listaTareas.includes(tarea)) {
    validacion.textContent = "No puedes ingresar 2 veces la misma tarea";
    seccionAgregarTarea.appendChild(validacion);
    return false;    
  }

  return true;
}

const agregarTarea = (tarea) => {
  if (validarTarea(tarea)) {
    listaTareas.push(tarea);
  }
}

const editarTarea = (tarea) => {
  // Editar tarea
}

const eliminarTarea = (tarea) => {
  // Eliminar tarea
}

const mostrarTareas = (lista) => {
  containerTareas.innerHTML = "";
  // mostrar la tarea en la interfaz
  lista.forEach(tarea => {
    crearTarea(tarea);
  })
}

// para crear la tarjeta con la tarea agregada y todos los demás elementos de ésta
const crearTarea = (tarea) => {
  // card
  const card  = document.createElement("div");
  card.classList.add("card", "mb-4");
  
  // card-body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const estadoTarea = document.createElement("div");
  estadoTarea.classList.add("estado-tarea");
  
  // checkbox
  const formCheck = document.createElement("div");
  formCheck.classList.add("form-check");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input");

  formCheck.appendChild(checkbox);
  
  // tarea
  const tareaTexto = document.createElement("h2");
  tareaTexto.textContent = tarea;

  estadoTarea.appendChild(formCheck);
  estadoTarea.appendChild(tareaTexto);
  
  // iconos
  const iconos = document.createElement("div");
  iconos.classList.add("iconos");
  const editar = document.createElement("i");
  // editar
  editar.classList.add("fa-solid", "fa-pencil", "icono", "editar")
  // borrar
  const borrar = document.createElement("i");
  borrar.classList.add("fa-solid", "fa-trash", "icono", "borrar")

  iconos.appendChild(editar);
  iconos.appendChild(borrar);

  cardBody.appendChild(estadoTarea);
  cardBody.appendChild(iconos);

  card.appendChild(cardBody);
  containerTareas.appendChild(card);  
}

botonAgregarTarea.addEventListener("click", (event) => {
  event.preventDefault();
  const nuevaTarea = input.value;
  agregarTarea(nuevaTarea);
  input.value = "";
  mostrarTareas(listaTareas);
});






/*



Implementa la capacidad de eliminar tareas de la lista al hacer clic en ellas. Esto requerirá recorrer el arreglo y actualizarlo correctamente.




eliminarTarea(): Función que elimina una tarea de la lista.


Utilizar objetos preconstruidos del lenguaje JavaScript para resolver un problema
En tu aplicación, deberás hacer uso de al menos un objeto preconstruido de JavaScript, como:

Date: para mostrar la fecha actual cuando se agrega una tarea.

Math: para generar un número aleatorio como identificador único de cada tarea.

Incluye un archivo README.md con una descripción clara del proyecto, cómo ejecutar el código, y las tecnologías utilizadas.
*/