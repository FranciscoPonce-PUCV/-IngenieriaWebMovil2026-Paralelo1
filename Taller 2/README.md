# Taller 2: JavaScript, Formularios y Web Storage

Guía de resolución de los ejercicios propuestos para el Taller 2.

## Ejercicio 1 - Separar CSS y JavaScript

Se recomienda crear la siguiente estructura:

```text
Carpeta-proyecto/
├── JS_Formularios_WebStorage.html
├── style.css
└── script.js
```

En nuestro archivo `.html`, debemos reemplazar la etiqueta 
`<style>...</style>` por lo siguiente:

```html
<link rel="stylesheet" href="style.css">
```
La instrucción anterior permite conectar un documento HTML con un archivo externo de código CSS, en este caso de nombre "style.css". Cada parte de la instrucción tiene un propósito:

```text
── <link>: indica que queremos enlazar un recurso externo con la página HTML.
── rel="stylesheet": especifica que el recurso enlazado es una hoja de estilos CSS.
── href="style.css": indica la ubicación y nombre del archivo CSS que queremos utilizar.
```

**Separar código JavaScript**

Para separar el código JavaScript, utilizaremos nuestro archivo  `script.js`. Se recomienda conectar el archivo JavaScript justo antes del cierre de la etiqueta `</body>`:

```html
<script src="script.js"></script>
```

Ahora sólo debemos copiar el código CSS a nuestro archivo `style.css` y el contenido de `<script>` al archivo `script.js`.


# Ejercicios
## Conceptos clave del Taller 2 y los ejercicios propuestos
| Concepto | Función |
|---|---|
| `document.getElementById()` | Obtiene un elemento HTML utilizando su Id|
| `.value` | Lee el contenido de un campo |
| `setItem()` | Para guardar información |
| `getItem()` | Para recuperar información |
| `removeItem()` | Para eliminar información |
| `JSON.stringify()` | Para Convertir un objeto a texto JSON |
| `JSON.parse()` | Para convertir texto JSON a un objeto |
| `localStorage` | Almacenamiento persistente del navegador|
| `sessionStorage` | Almacenamiento temporal asociado a la sesión de la pestaña |

## Ejercicio 2 - Agregar edad al formulario
Nuestro formulario original contiene nombre, correo y carrera. Para completar el ejercicio debemos agregar lo siguiente:

En la sección del formulario de nuestro archivo `.html`
```html
<label for="edad">Edad:</label>
<input type="number" id="edad" required>
```

En la sección "Configuración del formulario y uso del evento "submit"" de nuestro archivo `script.js`:

```javascript
const edad = document.getElementById("edad").value;
```

y agregarla al resultado:

```javascript
document.getElementById("resultado-formulario").textContent =
  "Nombre: " + nombre +
  " | Correo: " + email +
  " | Edad: " + edad +
  " | Carrera: " + carrera;
```

## Ejercicio 3 - Validar que la edad sea mayor que 0

Para completar este ejercicio podemos añadir lo siguiente:

```javascript
const edad = Number(document.getElementById("edad").value);

if (edad <= 0) {
  document.getElementById("resultado-formulario").textContent =
    "La edad debe ser mayor que 0.";
  return;
}
```

**Nota:** Los valores obtenidos mediante `.value` son texto; `Number()` permite convertirlos a número para poder comparar el valor.

## Ejercicio 4 - Guardar también el email en LocalStorage

La función original `guardarLocal()` guarda solamente el nombre mediante `setItem()`. Por lo que debemos actualizarla:

```javascript
function guardarLocal() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("nombreUsuario", nombre);
  localStorage.setItem("emailUsuario", email);

  document.getElementById("resultado-local").textContent =
    "Datos guardados correctamente.";
}
```

Explicación paso a paso de la función `guardarLocal()`:
```javascript
- const nombre = document.getElementById("nombre").value;
Busca el elemento cuyo id es "nombre" y obtiene el valor introducido por el usuario.

- const email = document.getElementById("email").value;
Hace lo mismo con el campo cuyo id es "email".

- localStorage.setItem("nombreUsuario", nombre);
Guarda el valor en LocalStorage utilizando "nombreUsuario" como clave.

- localStorage.setItem("emailUsuario", email);
Guarda el correo en LocalStorage utilizando "emailUsuario" como clave.

- document.getElementById("resultado-local").textContent =
  "Datos guardados correctamente.";
Informa al usuario que la operación terminó. Busca el elemento resultado-local y cambia su texto de forma dinámica.
```

Luego para recuperar correctamente los datos almacenados, debemos también actualizar la función `leerLocal()`:

```javascript
const nombre = localStorage.getItem("nombreUsuario");
const email = localStorage.getItem("emailUsuario");

document.getElementById("resultado-local").textContent =
  "Nombre: " + nombre + " | Email: " + email;
```

## Ejercicio 5 - Guardar todo el formulario como JSON

Para resolver este ejercicio debemos actualizar la sección "Formulario + JSON":

```javascript
const datos = {
  nombre: document.getElementById("nombre").value,
  email: document.getElementById("email").value,
  edad: document.getElementById("edad").value,
  carrera: document.getElementById("carrera").value
};
```

## Ejercicio 6 - Recuperar el formulario
Actualizamos la función `recuperarFormulario()` de la siguiente forma:

```javascript
function recuperarFormulario() {
  const datosGuardados =
    localStorage.getItem("datosFormulario");

  if (datosGuardados === null) {
    document.getElementById("resultado-guardado").textContent =
      "No existen datos guardados.";
    return;
  }

  const datos = JSON.parse(datosGuardados);

  document.getElementById("nombre").value = datos.nombre;
  document.getElementById("email").value = datos.email;
  document.getElementById("edad").value = datos.edad;
  document.getElementById("carrera").value = datos.carrera;
}
```

## 7. Desafío: agenda de contactos
Esto se deja como actividad complementaria para profundizar conocimiento.
