/*const my_products = [
    new Producto("./img/arena.png", "Arena", "materiales", "5000"),
    new Producto("./img/plasticor.png", "Plasticor", "materiales", "11000")
];*/

const contenedor_product = document.getElementById("productos");
const btn_buscar = document.getElementById("btn-search");

btn_buscar.addEventListener("click", () => {
    my_products.forEach(p => {

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.imagen}">
            <h3>${p.descripcion}</h2>
            <h2>$${p.precio}</h2>
        `;

        contenedor_product.appendChild(card);
    });
});