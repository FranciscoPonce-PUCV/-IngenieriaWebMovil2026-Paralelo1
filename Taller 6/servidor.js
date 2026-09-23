// Taller 6: Node.js + Express (Backend)
// Sigue los pasos del README y completa cada sección marcada con un número en forma secuencial (1,2,3...)

// 1: Importar Express.
// Pista: const express = require("express");

// 2: Crear la aplicación de Express.
// Pista: const app = express();

// 9: Permitir que Express entienda los datos en formato JSON que llegan en el cuerpo (body) de las peticiones.
// Pista: app.use(express.json());

// Datos de ejemplo. Tienen la misma estructura que las publicaciones de la API JSONPlaceholder.
let posts = [
  {
    userId: 1,
    id: 1,
    title: "Bienvenidos al Taller 6",
    body: "En este taller crearemos y levantaremos nuestro primer servidor con Node.js y Express."
  },
  {
    userId: 1,
    id: 2,
    title: "¿Qué es un backend?",
    body: "Es la parte de la aplicación que se ejecuta en el servidor y responde a las peticiones de los clientes."
  },
  {
    userId: 2,
    id: 3,
    title: "Métodos HTTP",
    body: "GET permite obtener datos, POST crear, PUT actualizar y DELETE eliminar."
  },
  {
    userId: 2,
    id: 4,
    title: "Formato JSON",
    body: "Los clientes y el servidor se comunican enviando y recibiendo datos en formato JSON."
  },
  {
    userId: 3,
    id: 5,
    title: "Postman",
    body: "Postman es una herramienta que permite enviar peticiones HTTP y revisar las respuestas del servidor."
  }
];

// 3: Crear la ruta GET "/" que responda con un mensaje de bienvenida utilizando res.send().

// 5: Crear la ruta GET "/saludo/:nombre" que responda con un saludo personalizado.
// Pista: el nombre se obtiene desde req.params.nombre

// 6: Crear la ruta GET "/api/posts" que responda con todas las publicaciones utilizando res.json().
// 8 (vuelve a esta ruta en el paso 8): Si la URL incluye ?userId=..., responder solo con las publicaciones de ese usuario.
// Pista: req.query.userId (recuerda convertirlo a número)

// 7: Crear la ruta GET "/api/posts/:id" que responda con UNA publicación.
// - Obtener el id desde req.params (recuerda convertirlo a número).
// - Buscar la publicación con find().
// - Si no existe, responder con el código 404.

// 10: Crear la ruta POST "/api/posts" que agregue una nueva publicación.
// - Leer los datos enviados desde req.body.
// - Validar que existan title y body (si faltan, responder con el código 400).
// - Crear la nueva publicación con un id nuevo y agregarla al arreglo con push().
// - Responder con el código 201 y la publicación creada.

// 11: Responder con el código 404 cuando la ruta no exista.
// Importante: Esto debe ir DESPUÉS de todas las rutas definidas.
// Pista: app.use((req, res) => { ... });

// 4: Levantar el servidor en el puerto 3000.
// Pista:
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
// });
