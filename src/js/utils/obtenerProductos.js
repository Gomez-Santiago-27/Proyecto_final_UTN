/**
 * 
 * @returns devuelve un arreglo con los productos disponibles.
 */
export async function obtenerProductos() {
    try {
        const respuesta = await fetch('http://localhost:3000/productos');

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