let listaTareas = [];

const botonAgregarTarea = document.getElementById("boton-agregar-tarea");

const containerTareas = document.querySelector(".container-tareas");

const agregarTarea = (tarea) => {
  if (tarea.length != 0) {
    if (listaTareas.includes(tarea)) {
      console.log("No puedes ingresar 2 veces la misma tarea");
    } else {
      listaTareas.push(tarea);
    }
  } else {
    console.log("No se puede ingresar una tarea vacía");
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
  const input = document.getElementById("nueva-tarea");
  const nuevaTarea = input.value;
  agregarTarea(nuevaTarea);
  input.value = "";
  mostrarTareas(listaTareas);
});

