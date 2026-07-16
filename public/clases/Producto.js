import { generarID } from './generar_id.js';
import { obtenerFecha } from './generar_fecha.js';

class Producto {

    constructor(imagen, descripcion, categoria, precio) {
         this.id = generarID();
         this.fecha = obtenerFecha();
         this.imagen = imagen;
         this.descripcion = descripcion; 
         this.categoria = categoria;
         this.precio = parseFloat(precio);
    }

    /* 
    Los getters y los setters en JS son inncesarios ya que no poseen la facultad 
    de encapsulamiento como en Java
    */

    // este método es el equivalente a 'toString()' en Java.
    mostrarInfo () {
        return `Imagen: ${this.imagen}, Descripcion: ${this.descripcion}, Precio: $${this.precio}`;
    }
}
// Exportar la clase
export default Producto;