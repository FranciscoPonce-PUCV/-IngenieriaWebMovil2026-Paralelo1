// Taller 7: Ionic + React + Express
// Completa la URL de cada fetch(). Cada función corresponde a una petición
// de la colección de Postman que creaste en el Taller 6.
// El resto del código (método, headers y body) ya está listo.

// 1: Escribe la dirección de tu servidor Express (la misma que usabas en Postman).
export const API_URL = "";

// 2: GET «Mensaje de bienvenida»
// Pista: fetch(`${API_URL}/`)
export const obtenerBienvenida = () =>
  fetch("");

// 3: GET «Saludo personalizado» (con el nombre Camila)
export const obtenerSaludo = () =>
  fetch("");

// 4: GET «Todas las publicaciones»
export const obtenerPublicaciones = () =>
  fetch("");

// 5: GET «Una publicación» (la publicación con id 1)
export const obtenerPublicacion = () =>
  fetch("");

// 6: GET «Publicación inexistente» (la publicación con id 999)
export const obtenerPublicacionInexistente = () =>
  fetch("");

// 7: GET «Publicaciones de un usuario» (el usuario con userId 2)
export const obtenerPublicacionesDeUsuario = () =>
  fetch("");

// 8: POST «Crear publicación»
export const crearPublicacion = () =>
  fetch("", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      title: "Mi primera publicación",
      body: "Creada desde Ionic"
    })
  });

// 9: POST «Crear publicación sin título»
export const crearPublicacionSinTitulo = () =>
  fetch("", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: "A esta publicación le falta el título"
    })
  });

// 10: GET «Ruta inexistente»
export const obtenerRutaInexistente = () =>
  fetch("");
