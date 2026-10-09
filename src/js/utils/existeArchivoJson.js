import fs from 'fs';

/**
 * 
 * @param {*} path es la ruta donde se encuentra tu archivo .json.
 * @returns devuelve true, si el archivo existe en la ruta especificada. 
 * De lo contrario, false.
 */
export function existeArchivoJSON(path) {
    return fs.existsSync(path);
}