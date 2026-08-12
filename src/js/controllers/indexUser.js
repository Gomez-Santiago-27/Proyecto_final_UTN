import { obtenerTodosLosProductos } from "../utils/obtenerProductos.js";

const seccionDeProductos = document.querySelector('#seccionDeProductos');
/**
 * post: ejecuta el sistema principal
 */
async function main() {
   const productos = await obtenerTodosLosProductos();
   productos.forEach(producto => {
      
      const tarjeta = document.createElement('article');
      tarjeta.setAttribute("class", "tarjeta");
      tarjeta.innerHTML = `
         <img src="${producto.imagen}"></img>
         <h3>${producto.descripcion}</h3>
         <p>${producto.categoria}</p>
         <p>$${producto.precio}</p>
         <button class="btn-search" id="btn${producto.id}">Agregar</button>
         `;
      seccionDeProductos.appendChild(tarjeta);
   });
}
main();