import { obtenerTodosLosProductos } from "../utils/obtenerProductos.js";

const seccionDeProductos = document.querySelector('#seccionDeProductos');
const entradaDeTextoBuscador = document.querySelector('#entradaDeTextoBuscador');
const botonBuscar = document.querySelector('#botonBuscador');
const productos = await obtenerTodosLosProductos();

/**
 * 
 * @param {*} arreglo es el arreglo que recorre la función.
 * 
 * post: permite crear una 'tarjeta' por cada elemento del arreglo 
 * y lo coloca dentro de 'seccionDeProductos'.
 */
function recorrerArregloYMostrarlo(arreglo) {
   if(arreglo.length !== 0) {
      arreglo.forEach(producto => {
            const tarjeta = document.createElement('article');
            tarjeta.setAttribute("class", "tarjeta");
            tarjeta.innerHTML = `
               <img src="${producto.imagen}"></img>
               <div>
               <p><b>${producto.descripcion}</b></p>
               <p>$${producto.precio}</p>
               <button class="btn" id="btn${producto.id}">Pedir</button>
               </div>
            `;
            seccionDeProductos.appendChild(tarjeta);
      });
   } else {
      seccionDeProductos.innerHTML = `<p>No se encontraron productos.</p>`;
   }
}

/**
 * 
 * @param {*} arregloDeProductos: es el arreglo que contiene los productos a mostrar.
 * post: muestra todos los productos disponibles. 
 */
function mostrarTodosLosProductos(arregloDeProductos) {
   if (arregloDeProductos.length === 0) {
      seccionDeProductos.innerHTML = `<p>No se encontraron productos.</p>`;   
   } else {
      recorrerArregloYMostrarlo(arregloDeProductos);
   }
}

function mostrarProductosBuscados(arreglo) {
   if ( entradaDeTextoBuscador.value != null) {
      seccionDeProductos.innerHTML = `<p>Resultados de la busqueda</p>`
      let busquedaDelUsuario = entradaDeTextoBuscador.value.toLowerCase().trim();
      let nuevoArreglo = [];
      arreglo.forEach(producto => {
         if (producto.descripcion.startsWith(busquedaDelUsuario) ||
            producto.descripcion.includes(busquedaDelUsuario)) {
            
            nuevoArreglo.push(producto);
         }
      });
      recorrerArregloYMostrarlo(nuevoArreglo);
      entradaDeTextoBuscador.value = "";
   }
}

mostrarTodosLosProductos(productos);

botonBuscar.addEventListener('click', mostrarProductosBuscados.bind(null, productos));