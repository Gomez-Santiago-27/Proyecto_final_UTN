/**
 * 
 * @returns devuelve un arreglo con los productos disponibles.
 */
export async function obtenerTodosLosProductos() {
	try {
		const respuesta = await fetch('http://localhost:3000/api/productos');

		if (!respuesta.ok) {
			throw new Error(`Error con el servidor! ${respuesta.status}`);
		}

		const productos = await respuesta.json();
		return productos;

	} catch (error) {
		console.error('Error al obtener los productos: '+ error);
		return [];
	}
}

export function verTodosLosProductos(arreglo) {
	arreglo.forEach(producto => {
      console.log(producto);
   });
}

export function verHerramientas(arreglo) {
   arreglo.forEach(producto => {
      if (producto.categoria == 'Herramientas') {
         console.log(producto);
      }
   });
}

export function verSanitarios(arreglo) {
   arreglo.forEach(producto => {
      if (producto.categoria == 'Sanitarios') {
         console.log(producto);
      }
   });
}