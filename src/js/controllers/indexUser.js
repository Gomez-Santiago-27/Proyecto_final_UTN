import { obtenerTodosLosProductos } from "../utils/obtenerProductos.js";

const seccionDeProductos = document.querySelector('#seccionDeProductos');
const entradaDeTextoBuscador = document.querySelector('#entradaDeTextoBuscador');
const botonBuscar = document.querySelector('#botonBuscador');
const cuerpoPedido = document.querySelector("#cuerpoPedido");
const totalPedido = document.querySelector("#totalPedido");
const productos = await obtenerTodosLosProductos();
const confirmarPedido = document.querySelector("#confirmarPedido");
const limpiarPedido = document.querySelector("#limpiarPedido");

let total = 0;

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
         tarjeta.className = "card mb-3";
         tarjeta.innerHTML = `
            <div class="row g-0 align-items-center">
               <div class="col-4">
                  <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.descripcion}">
               </div>
               <div class="col-8">
               <div class="card-body">
               <h5 class="card-title">${producto.descripcion}</h5>
               <p class="card-text">$${producto.precio}</p>
               <button class="btn btn-primary">Agregar al presupuesto</button>
               </div>
            </div>
            </div>
         `;

         // El botón de ESTA tarjeta ya sabe de qué producto es
         tarjeta.querySelector('button').addEventListener('click', () => {
            agregarAlPedido(producto, 1);
         });
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

/**
 * 
 * @param {*} producto 
 * @param {*} cantidad
 * post : agrega productos a la tabla de pedidos. 
 */
function agregarAlPedido(producto, cantidad) {
   const subtotal = producto.precio * cantidad;
   total = total + subtotal;
   const fila = document.createElement('tr');
   fila.innerHTML = `
      <td>${producto.id}</td>
      <td>${producto.descripcion}</td>
      <td>${cantidad}</td>
      <td>$${subtotal}</td>
   `;
   cuerpoPedido.appendChild(fila);
   totalPedido.textContent = `$${total}`;
}

confirmarPedido.addEventListener('click', () => {
   // envía el contenido de la tabla a la API que este lo guarde en 'pedidos.json'
   // Va a hacer una solicitud POST express.
});

/**
 * post: borra los elementos de la tabla del pedido y reinicia el total a 0.
 */
limpiarPedido.addEventListener('click', () => {
   cuerpoPedido.innerHTML = "";
   total = 0;
   totalPedido.textContent =  `$${total}`;
})

mostrarTodosLosProductos(productos);

botonBuscar.addEventListener('click', mostrarProductosBuscados.bind(null, productos));