import { obtenerProductos } from "../utils/obtenerProductos.js";

/**
 * post: ejecuta el sistema principal
 */
async function main() {
    const productos = await obtenerProductos();
    console.log(`Mis productos: ${productos}`);
    console.log(`tipo de dato: ${typeof productos}`);

    productos.forEach(element => {
        console.log(element.fecha);
    });
}

// main();