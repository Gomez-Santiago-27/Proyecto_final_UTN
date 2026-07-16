/* 
    El archivo 'app_index_user.js' 
    refiere a las acciones que se ejecutan en el archivo 'index_user.html'
*/

// La siguiente linea de código demuestra como se debe importar un archivo .json
import datos from '.public/data/productos.json' assert { type: 'json' };

const contenedor = document.getElementById("productos");

datos.forEach(p => {

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.imagen}">
            <h3>${p.descripcion}</h2>
            <h2>$${p.precio}</h2>
        `;

        contenedor.appendChild(card);
});
