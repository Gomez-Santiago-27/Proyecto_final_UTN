// @ts-check

const contenedorDeProductos = document.getElementById("contenedorDeProductos");

/**
 * 
 * @returns devuelve el contenido del archivo 'productos.json' en forma de arreglo.
 * De lo contrario se obtiene un arreglo vacío.
 */
async function obtenerListaDeProductos() {
    try {
        // Usamos fetch en lugar de 'fs'. La ruta es relativa a tu archivo HTML.
        const respuesta = await fetch('.././data/productos.json');
        
        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }
        
        const productos = await respuesta.json();
        return productos;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return []; // Devolvemos un arreglo vacío si falla
    }
}

/**
 * post: muestra en pantalla todos los productos disponibles.
 * Es el filtro por defecto.
 */
async function mostrarTodosLosProductos() {
    const productos = await obtenerListaDeProductos();
    for (let producto of productos) {
        const tarjeta = document.createElement("section");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
            <img src="${producto.imagen}">
            <h3>${producto.descripcion}</h3>
            <h2>$${producto.precio}</h2>
        `;
        contenedorDeProductos.appendChild(tarjeta);
    }
}

mostrarTodosLosProductos();
