# Módulo 3 - Evaluación Portafolio

> Proyecto para realizar una Lista de Tareas, utilizando HTML, CSS y JavaScript para practicar el uso de variables, estructuras de control, funciones, objetos, arreglos y manipulación del DOM.

## 🧠 Descripción

 Este proyecto fue desarrollado como parte del Bootcamp Desarrollo de Aplicaciones Full Stack JavaScript como ejercicio de evaluación de portafolio al final del tercer módulo. Su objetivo principal es poner en práctica los conocimientos adquiridos a la fecha como:
- HTML
- CSS
- JavaScript:
  - Variables
  - Arreglos
  - Objetos
  - Condicionales
  - Funciones 
- GitHub

## 🔍 Contexto del Proyecto

Desarrollar una aplicación de lista de tareas (To-Do List) usando JavaScript. El objetivo de este proyecto es integrar los conocimientos adquiridos sobre JavaScript y aplicarlos de manera práctica en la creación de una solución interactiva. Durante el desarrollo, se utilizarán diversas características fundamentales de JavaScript para estructurar, controlar y manejar el flujo de datos en la aplicación.

## 📖 Instrucciones

En función de tu proyecto personal previamente establecido, deberás implementar las siguientes funcionalidades y características utilizando JavaScript. A lo largo de esta actividad, debes demostrar el uso de estructuras de datos, control de flujo y modularización del código, además de la implementación de buenas prácticas de desarrollo web.

**Recuerda que este proyecto formará parte del registro de evidencias de tu portafolio. Por lo tanto, debe reflejar tu dominio en el lenguaje JavaScript y tus habilidades en el desarrollo de aplicaciones interactivas.**

## ✅ Requerimientos Funcionales Mínimos Esperados

#### 1. Explicar las características fundamentales de JavaScript para el desarrollo web
En un archivo de tu repositorio (puede ser el `README.md` o un archivo aparte), deberás incluir una breve explicación sobre:
- Qué es JavaScript y su rol en el desarrollo de aplicaciones web.
- Las ventajas de usar JavaScript para crear aplicaciones interactivas en el navegador.
- Ejemplos de funcionalidades que solo pueden ser posibles gracias al uso de JavaScript (como la interactividad en formularios, listas dinámicas, validación en tiempo real, etc.).

#### 2. Utilizar variables simples y sentencias condicionales para resolver un problema básico
Implementa una funcionalidad en la que el usuario pueda agregar tareas a una lista y, al intentar agregar una tarea vacía, se muestre un mensaje de advertencia.
- Deberás usar **variables** para almacenar las tareas y las acciones que se realizarán en la lista.
- Utiliza sentencias condicionales (`if`, `else`) para verificar si el usuario intenta agregar una tarea vacía.
#### 3. Utilizar arreglos y sentencias iterativas para mostrar y gestionar las tareas
En tu aplicación, deberás almacenar las tareas en un **arreglo** y luego mostrarlas dinámicamente en la página.
- Usa sentencias iterativas como `for` o `forEach` para recorrer el arreglo de tareas y mostrar cada una en la interfaz.
- Implementa la capacidad de eliminar tareas de la lista al hacer clic en ellas. Esto requerirá recorrer el arreglo y actualizarlo correctamente.

#### 4. Codificar una solución utilizando funciones para modularizar el código
Organiza tu código en varias **funciones** que se encarguen de tareas específicas. Algunas de las funciones podrían ser:
- `agregarTarea()`: Función que añade una nueva tarea.
- `eliminarTarea()`: Función que elimina una tarea de la lista.
- `mostrarTareas()`: Función que muestra todas las tareas en la interfaz.

#### 5. Utilizar objetos preconstruidos del lenguaje JavaScript para resolver un problema
En tu aplicación, deberás hacer uso de al menos un **objeto preconstruido** de JavaScript, como:
- `Date`: para mostrar la fecha actual cuando se agrega una tarea.
- `Math` : para generar un número aleatorio como identificador único de cada tarea.

#### 6. Gestionar el código fuente con Git y GitHub
Organiza el código en un repositorio de GitHub siguiendo las buenas prácticas:
- Asegúrate de tener un historial de **commits** claros y bien definidos.
- Utiliza una **estructura ordenada** para el proyecto (separación de archivos HTML, CSS, JS).

Incluye un archivo `README.md` con una descripción clara del proyecto, cómo ejecutar el código, y las tecnologías utilizadas.

## 📦 Producto Esperado

Tu proyecto debe contener los siguientes elementos:
1. **Estructura HTML5**: Página web básica con una lista de tareas donde el usuario pueda agregar y eliminar elementos.

2. **CSS**: Estilos básicos para una presentación visual limpia y funcional.

3. **Interactividad con JavaScript**: Funcionalidad dinámica para agregar y eliminar tareas, con validaciones básicas (como verificar que la tarea no esté vacía).

4. **Funciones reutilizables**: Implementación de al menos tres funciones que realicen tareas específicas.

5. **Explicación en el repositorio**: Explicación clara sobre cómo JavaScript facilita la interacción y manipulación del DOM, así como el control de flujo y estructura de datos.

6. **Gestión en GitHub**: Un repositorio bien organizado con commits frecuentes y descriptivos.

## ⛑ Recomendaciones Adicionales

1. **Pruebas**: Asegúrate de probar la funcionalidad de agregar y eliminar tareas, así como la validación de entrada.

2. **Estilo**: La interfaz debe ser sencilla pero clara. No es necesario usar un framework como Bootstrap, pero puedes optar por hacerlo si te sientes cómodo.

3. **Accesibilidad**: Considera agregar etiquetas y descripciones accesibles, como el uso de etiquetas aria para accesibilidad.

4. **Comentarios**: Es importante que tu código esté bien comentado, especialmente las partes que implementan lógica importante o compleja.

## 🧪 Cómo ejecutar

1. #### Clonar el repositorio:
- git clone https://github.com/ndevia/todo-list.git

2. #### Navegar a la carpeta del proyecto:
- cd Evaluacion_portafolio_Natalia_Devia

3. #### Abrir el proyecto:
Puede realizarse utilizando cualquiera de las formas descritas a continuación:
- Abrir el archivo `index.html` en el navegador
- Abrir `VS Code` y ejecutar con `Live Server` 

4. #### Adicionalmente el proyecto se encuentra desplegado en GitHub Pages:
- https://ndevia.github.io/todo-list/

## 💡 Respuestas
#### 1. Explicar las características fundamentales de JavaScript para el desarrollo web
- Qué es JavaScript y su rol en el desarrollo de aplicaciones web.

JavaScript es un lenguaje de programación que funciona por el lado del cliente, permitiéndonos darle dinamismo a las aplicaciones web y permitiéndonos interactuar con el usuario.

- Las ventajas de usar JavaScript para crear aplicaciones interactivas en el navegador.

Nuestros sitios, pueden ser dinámicos en lugar de estáticos y al ser interactivos, podemos pedir algunos datos al usuario y utilizarlos, por ejemplo, para que utilice un formulario para ponerse en contacto y que con éste nos llegue directamente un email con su mensaje.

- Ejemplos de funcionalidades que solo pueden ser posibles gracias al uso de JavaScript (como la interactividad en formularios, listas dinámicas, validación en tiempo real, etc.):
  - Manipulación del DOM.
  - Interacción con el usuario.
  - Obtención de datos del usuario que podrían servir, por ejemplo, para tomar una hora médica.  
  - En este proyecto en particular, las tareas son creadas de manera dinámica utilizando, mediante JavaScript y la eliminación de tareas también es posible gracias a su uso.

#### 2. Explicación clara sobre cómo JavaScript facilita la interacción y manipulación del DOM, así como el control de flujo y estructura de datos.
JavaScript permite controlar el flujo del código mediante condicionales, ciclos y funciones, lo que permiten ordenar el código y reutilizarlo. También se ayuda de estructuras como variables, arreglos y objetos, que permiten trabajar fácilmente con datos.

Adicionalmente, JavaScript puede modificar el DOM, el cual, representa la estructura HTML de la página como un árbol de nodos. Esta capacidad de JavaScript permite acceder a estos elementos y modificarlos fácilmente lo que junto con lo anteriormente señalado permite la creación de sitios web dinámicos e interactivos.

## 🛠 Tecnologías utilizadas:
- HTML
- CSS
- Bootstrap
- JavaScript
- Git y GitHub

## 🚧 Mejoras futuras:
- Agregar funcionalidad para editar tareas.
- Desabilitar tareas completadas para edición.
- Agregar tooltips a los íconos "editar" y "eliminar" tarea para facilitar comprensión.

## 🚀 Despliegue:
Este proyecto fue desplegado en GitHub Pages y se puede visitar en el siguiente [link](https://ndevia.github.io/todo-list/).

## 📄 Notas:
- Para las fechas de creación y modificación de las tareas se utiliza `new Date().toLocaleString("en-GB")`, para obtener el formato deseado, ya que el método `.toLocaleString()` entrega tanto la fecha como la hora actual y el parámetro `"en-GB"` corresponde a la región "British English", que usa un formato de día-mes-año para las fechas y de 24 horas sin AM/PM para los horarios. 
- Las preguntas teóricas fueron respondidas en la sección **Respuestas** del archivo `README.md`.
- Para los `id` de las tareas, se utilizaron números enteros correlativos, ya que no me hacía mucho sentido utilizar números aletorios que tienen la posibilidad de repetirse.
- Por complejidad, algunas funcionalidades no fueron implementadas y se detallan en la sección **Mejoras futuras**.