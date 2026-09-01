# Taller 4: Ionic + React + APIs

**Nota**: Durante todos nuestros talleres utilizaremos el editor de código Visual Studio Code. Para dudas respecto a la interfaz del editor puedes consultar la documentación oficial en: https://code.visualstudio.com/docs/editing/getting-started

## Algunos comandos útiles para VSCode
```text
Nota: Los siguientes comandos fueron probados en Windows.

Alt + Shift + F - comando para indentar el código.
Control + J - comando para abrir o cerrar la terminal.
Control + S - comando para guardar el archivo actual.
```

## Objetivo del Taller 4

Aprender a obtener información desde una API (JSONPlaceholder) y mostrarla dinámicamente en una aplicación creada con **Ionic y React**.

A diferencia del taller anterior, ahora trabajaremos con:

- Componentes de React: `useState`, eventos, renderizado dinámico mediante `map()`.
- Componentes de interfaz de Ionic.

## ¿Qué cambia respecto al taller anterior?

Con JavaScript buscábamos y modificábamos directamente el DOM, utilizando:

```javascript
const boton = document.getElementById("btn-cargar");
const articulo = document.createElement("article");
y appendChild()
```

Con React, normalmente se trabaja de otra forma:

1. Obtenemos los datos desde la API.
2. Guardamos los datos en el **estado**.
3. React detecta el cambio.
4. React actualiza la interfaz.

## 1. Primer paso: Crear el proyecto 

Instala Ionic CLI utilizando los siguientes comandos (asegúrate de tener Node y su versión correspondiente instalados previamente):

```bash
Nota: Puedes leer más acerca de los comandos de npm en el siguiente enlace: https://docs.npmjs.com/cli/v12/using-npm/config

npm config set ignore-scripts true
Explicación: Este comando le indica a npm que bloquee la ejecución automática de cualquier script; Se recomienda utilizarlo por motivos de seguridad.

npm view @ionic/cli
Explicación: Este comando se utiliza para consultar y mostrar en la terminal información detallada sobre el paquete npm que se desea instalar (@ionic/cli en nuestro caso).

npm install -g @ionic/cli
Explicación: Este comando se utiliza para instalar la interfaz de línea de comandos oficial de Ionic.

```

Una vez instalado, creamos un proyecto utilizando Ionic:

```bash
ionic start taller4 blank --type=react
```

El comando anterior crea un proyecto de tipo React con nombre taller4, ahora ingresa a la carpeta del proyecto que creaste utilizando:

```bash
cd taller4
Nota: Asegúrate de utilizar el nombre del proyecto que asignaste (taller4 en nuestro ejemplo).
```

Despliega la aplicación utilizando el siguiente comando:

```bash
ionic serve
Explicación: Este comando se utiliza para iniciar un servidor de desarrollo local y abrir nuestra aplicación de Ionic en el navegador web.
Nota: Puedes leer más acerca de este comando en el siguiente enlace: https://ionicframework.com/docs/cli/commands/serve
```

## 2. Archivos del taller

El proyecto tiene muchos directorios y archivos, pero durante el taller, trabajaremos principalmente en el siguiente directorio:

```text
src/
├── pages/
│   ├── 
└── App.tsx
```

Descarga el archivo `PostsPage.tsx` que encontrarás en los archivos del taller 4 y cópialo dentro del directorio anterior (src/pages). Este archivo contiene comentarios que te servirán de apoyo para completar el taller.


## 3. Componentes de Ionic

En Ionic + React utilizaremos componentes preparados para crear interfaces:

| Componente | Propósito |
|---|---|
| `IonPage` | Página de Ionic |
| `IonHeader` | Encabezado |
| `IonToolbar` | Barra superior |
| `IonTitle` | Título |
| `IonContent` | Contenido principal |
| `IonButton` | Botón |
| `IonCard` | Tarjeta |
| `IonSpinner` | Indicador de carga |

Ejemplo de estructura de una página:

```tsx
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Publicaciones</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent>
    Contenido de la aplicación.
  </IonContent>
</IonPage>
```

## 4. Utilizar `useState` de React

A partir de este punto, trabajaremos en nuestro archivo `PostsPage.tsx`. Primero definiremos la estructura de una publicación, inspirándonos en la estructura que nos indica la API:

```tsx
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
```

Después importamos `useState` desde React:

```tsx
import { useState } from "react";
```
`useState` es un "Hook" de React que les permite a los componentes tener memoria propia (estado).

***Nota:*** Puedes leer más al respecto en la documentación oficial de React (https://react.dev/reference/react/useState).

Y creamos el estado para nuestros Posts:

```tsx
const [posts, setPosts] = useState<Post[]>([]);
```

El fragmento de código anterior puede interpretarse de la siguiente forma:

```text
posts     → publicaciones actuales
setPosts  → función para actualizar las publicaciones
[]        → inicialmente no existen publicaciones
```

## 5. Crear la función para consultar la API

Nuestro archivo `PostsPage.tsx` descargado contiene la siguiente función:

```tsx
const cargarPosts = () => {
  // Aquí realizaremos la petición
};
```

Dentro de dicha función, podemos utilizar el método `fetch()`, al igual que en el Taller 3:

```tsx
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((datos) => {
    console.log(datos);
  });
```

Para verificar que todo está funcionando, prueba primero el código y revisa la consola del navegador.


## 6. Guardar los datos en el estado

Ahora que verificamos que todo está funcionando y que recibimos correctamente los datos desde la API podemos reemplazar:

```tsx
console.log(datos);
```

Por el siguiente fragmento de código:

```tsx
setPosts(datos);
```

La función `cargarPosts()` debería seguir esta estructura:

```tsx
const cargarPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((datos) => {
      setPosts(datos);
    });
};
```

## 7. Ejecutar la función con un botón

En Ionic React el evento click de un botón se puede definir de la siguiente forma:

```tsx
<IonButton onClick={cargarPosts}>
  Cargar publicaciones
</IonButton>
```

Esto reemplaza la lógica del evento definido en el Taller 3:

```javascript
boton.addEventListener("click", function() {
  // ...
});
```

## 8. Mostrar publicaciones con `map()`

En el Taller 3 utilizamos `forEach()` para recorrer el arreglo y generar los Posts de forma dinámica.

Con React podemos transformar cada elemento del arreglo en una representación visual mediante el método `map()`. A continuación un ejemplo:

```tsx
posts.map((post) => (
  <IonCard key={post.id}>
    <IonCardHeader>
      <IonCardTitle>{post.title}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      {post.body}
    </IonCardContent>
  </IonCard>
))
```

La propiedad `key={post.id}` permite que React identifique cada elemento del arreglo y se genera la estructura definida de forma dinámica.


## 9. Mostrar un estado de carga

Para mostrar un mensaje de "cargando publicaciones", podemos añadir lo siguiente:

```tsx
const [cargando, setCargando] = useState(false);
```

Antes de realizar la petición:

```tsx
setCargando(true);
```

Cuando finalice:

```tsx
setCargando(false);
```

y podríamos mostrar un componente como el siguiente:

```tsx
{cargando && (
  <div className="estado">
    <IonSpinner />
    <p>Cargando publicaciones...</p>
  </div>
)}
```


## 10. Manejo de errores

Recordar que siempre que hacemos una petición HTTP se debe añadir algún tipo de manejo de errores. Podemos añadir un estado para esto:

```tsx
const [error, setError] = useState("");
```

En nuestro método `fetch()` podemos añadir un `catch()` al igual que en el Taller 3:

```tsx
.catch((error) => {
  console.error(error);
  setError("Ocurrió un error al cargar las publicaciones.");
})
.finally(() => {
  setCargando(false);
});
```

Para mostrar el mensaje de error al usuario, podemos añadir lo siguiente:

```tsx
{error && (
  <IonText color="danger">
    <p>{error}</p>
  </IonText>
)}
```

## 12. Resultado esperado

La aplicación debería permitir:

1. Presionar **Cargar publicaciones**.
2. Realizar una petición con `fetch()`.
3. Recibir datos desde JSONPlaceholder.
4. Guardarlos con `setPosts()`.
5. Recorrerlos con `map()`.
6. Mostrar cada publicación mediante un `IonCard`.
7. Mostrar un indicador de carga.
8. Mostrar un mensaje si ocurre un error.


## 13. Comparación con el taller anterior

| JavaScript tradicional | React + Ionic |
|---|---|
| `getElementById()` | Estado y props |
| `addEventListener()` | `onClick` |
| `createElement()` | JSX |
| `appendChild()` | Renderizado de React |
| `innerHTML = ""` | Actualización del estado |
| `forEach()` para crear elementos | `map()` para renderizar |
| HTML estándar | Componentes Ionic |

> En JavaScript modificamos directamente el DOM. En React describimos la interfaz y actualizamos el estado; React se encarga de reflejar los cambios automáticamente.

---
# Ejercicio propuesto
Genera una especie de wiki de los personajes de la serie "The Rick and Morty" utilizando la información proporcionada en la API: https://rickandmortyapi.com/api/character

## Referencias

- Ionic React: https://ionicframework.com/react
- Documentación de Ionic: https://ionicframework.com/docs
- JSONPlaceholder: https://jsonplaceholder.typicode.com/
- React useState: https://react.dev/reference/react/useState
