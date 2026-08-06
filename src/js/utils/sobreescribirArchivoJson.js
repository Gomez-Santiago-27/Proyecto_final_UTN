import fs from 'fs';

/**
 * 
 * @param {*} file es la ruta donde se encuentran el archivo .json.
 * @param {*} arregloDeProductos es el arreglo que reemplazara al archivo .json.
 * post: Reemplaza el contenido de un archivo .json por el contenido que hay dentro
 * de un arreglo.
 */
export function sobreescribirArchivoJSON(file, arregloDeProductos) {
    fs.writeFileSync(file, JSON.stringify(arregloDeProductos, null, 2));
}