import fs from 'fs';
import Producto from '../models/Producto.js';

export function guardarProductoEnJSON(imagen, descripcion, categoria, precio) {
     // 1- Busca el archivo 'productos.json'
     let productos = JSON.parse(fs.readFileSync('../../data/productos.json', 'utf8'));

     //2- crea el objeto Producto
     let nuevoProducto = new Producto(
        `../../assets/uploads/${imagen.originalname}`,
        descripcion, 
        categoria, 
        precio
        );

     productos.push(nuevoProducto);
     
     sobreescribirArchivoJSON('../../data/productos.json', productos);
}