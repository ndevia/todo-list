let listaTareas = [];
let contadorId = 1;

const seccionAgregarTarea = document.querySelector(".container-input");
const input = document.getElementById("nueva-tarea");
const botonAgregarTarea = document.getElementById("boton-agregar-tarea");
const containerTareas = document.querySelector(".container-tareas");  
const checkbox = document.querySelector(".form-check-input");

// funcion para validar tareas
const validarTarea = (tarea) => {
  // revisa si la tarea ingresada ya se encuentra en la lista de tareas
  const tareaExistente = (nombreNuevatarea) => {
    return listaTareas.some(tareaExistente => tareaExistente.nombre.toLowerCase() === nombreNuevatarea.toLowerCase());
  }

  // eliminar mensajes de advertencia existentes
  const mensajeExistente = seccionAgregarTarea.querySelector(".invalid");
  if (mensajeExistente) {
    mensajeExistente.remove();
  }

  const validacion = document.createElement("p");
  validacion.classList.add("text-danger", "text-start", "invalid");
  
  // validar que no se ingrese una tarea vacía
  if (tarea.nombre.length === 0) {
    validacion.textContent = "No se puede ingresar una tarea vacía";
    seccionAgregarTarea.appendChild(validacion);
    return false;
  }
  // validar que no se ingrese una tarea repetida
  if (tareaExistente(tarea.nombre)) {
    validacion.textContent = "No puedes ingresar 2 veces la misma tarea";
    seccionAgregarTarea.appendChild(validacion);
    return false;    
  }

  return true;
}

// función para agregar tareas
const agregarTarea = (tarea) => {
  if (validarTarea(tarea)) {
    listaTareas.push(tarea);
  }
}

// función para editar tareas
const editarTarea = () => {
  // Editar tarea
  console.log("editar")
}

// función para eliminar tareas
const eliminarTarea = (event) => {
  // obtener tarea a eliminar
  const boton = event.currentTarget;
  const tarea = boton.closest(".contenido-tarea").children[0].children[1];
  // obtener id de la tarea
  let id = parseInt(tarea.getAttribute("data-id"));
  // eliminar tarea de la lista de tareas
  listaTareas = listaTareas.filter(tarea => tarea.id !== id);
  // actualizar lista de tareas
  mostrarTareas(listaTareas);
}

// mostrar todas las tareas en la interfaz
const mostrarTareas = (lista) => {
  // asegura que el contenedor de las tarjetas con tareas esté vacío, para que no haya tareas duplicadas
  containerTareas.innerHTML = "";
  lista.forEach(tarea => {
    crearTarea(tarea);
  })
}

// para crear la tarjeta con la tarea agregada y todos los demás elementos de ésta
const crearTarea = (tarea) => {
  // card
  const card  = document.createElement("div");
  card.classList.add("card", "mb-4", "col-sm-12", "col-lg-10", "mx-auto");
  
  // card-body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const contenidoTarea = document.createElement("div");
  contenidoTarea.classList.add("contenido-tarea", "py-3");
  const estadoTarea = document.createElement("div");
  estadoTarea.classList.add("estado-tarea");
  
  // checkbox
  const formCheck = document.createElement("div");
  formCheck.classList.add("form-check");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input");
  checkbox.dataset.id = tarea.id;

  const estado = tarea.detalles.find(detalles => detalles.etiqueta === "Estado")?.valor;

  checkbox.checked = estado === "Finalizada";
  checkbox.addEventListener("change", toggleTareaFinalizada);
  
  if (estado === "Finalizada") {
    estadoTarea.classList.add("finalizada");
  }

  formCheck.appendChild(checkbox);
  
  // tarea
  const tareaTexto = document.createElement("h2");
  tareaTexto.classList.add("tarea");
  tareaTexto.textContent = `${tarea.nombre}`;
  tareaTexto.dataset.id = tarea.id;

  estadoTarea.appendChild(formCheck);
  estadoTarea.appendChild(tareaTexto);
  
  // iconos
  const iconos = document.createElement("div");
  iconos.classList.add("iconos");
  // editar
  const botonEditar = document.createElement("button");
  botonEditar.type = "button";
  botonEditar.classList.add("btn", "btn-editar");
  const editar = document.createElement("i");
  editar.classList.add("fa-solid", "fa-pencil", "icono", "editar");
  botonEditar.appendChild(editar);
  // borrar
  const botonBorrar = document.createElement("button");
  botonBorrar.type = "button";
  botonBorrar.classList.add("btn", "btn-borrar");
  const borrar = document.createElement("i");
  borrar.classList.add("fa-solid", "fa-trash", "icono", "borrar");
  botonBorrar.appendChild(borrar);
  // agregar EventListeners
  botonEditar.addEventListener("click", editarTarea);
  botonBorrar.addEventListener("click", eliminarTarea);

  iconos.appendChild(botonEditar);
  iconos.appendChild(botonBorrar);

  // detalles tarea
  const detallesTarea = document.createElement("div");
  detallesTarea.classList.add("detalles-tarea");

  tarea.detalles.forEach(detalle => {
    const detalleEtiqueta = document.createElement("p");
    detalleEtiqueta.classList.add("detalle-etiqueta");
    detalleEtiqueta.textContent = `${detalle.etiqueta}: `
    const detalleValor = document.createElement("span");
    detalleValor.classList.add("detalle-valor");
    detalleValor.textContent = `${detalle.valor}`
    
    detalleEtiqueta.appendChild(detalleValor);
    detallesTarea.appendChild(detalleEtiqueta);
  });

  contenidoTarea.appendChild(estadoTarea);
  contenidoTarea.appendChild(iconos);

  cardBody.appendChild(contenidoTarea);
  cardBody.appendChild(detallesTarea);

  card.appendChild(cardBody);
  containerTareas.appendChild(card);  
}

// Agregar tarea
botonAgregarTarea.addEventListener("click", (event) => {
  event.preventDefault();
  const nuevaTarea = {
    id: contadorId,
    nombre: input.value,
    detalles: [
      {etiqueta: "Creación", valor: new Date().toLocaleString("en-GB")},
      {etiqueta: "Modificación", valor: new Date().toLocaleString("en-GB")},
      {etiqueta: "Estado", valor: "Pendiente"}
    ]
  };
  agregarTarea(nuevaTarea);
  input.value = "";
  mostrarTareas(listaTareas);
  contadorId += 1;
});

// cambiar estado tarea 
const toggleTareaFinalizada = (event) => {
  const id = parseInt(event.target.dataset.id);
  const tarea = listaTareas.find(tarea => tarea.id === id);
  if (tarea) {
    const estadoTexto = tarea.detalles.find(detalles => detalles.etiqueta === "Estado");
    if (estadoTexto) {
      estadoTexto.valor = event.target.checked ? "Finalizada" : "Pendiente"; 
    }
    
    const fechaModificacion = tarea.detalles.find(detalles => detalles.etiqueta === "Modificación");
    if(fechaModificacion) {
      fechaModificacion.valor = new Date().toLocaleString("en-GB");
    }

    mostrarTareas(listaTareas);
  }
}
