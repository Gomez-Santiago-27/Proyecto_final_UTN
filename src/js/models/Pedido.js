class Pedido {

    constructor(usuario, domicilio, listaProductos, fechaDeEnvio) {
        this.usuario = usuario;
        this.domicilio = domicilio;
        this.listaProductos = listaProductos;
        this.fechaDeEnvio = fechaDeEnvio;
    }

    mostrarPedido() {
        return `Usuario: ${this.usuario},
                Domicilio: ${this.domicilio}, 
                Productos Solicitados: ${this.listaProductos},
                Fecha de Envio: ${this.fechaDeEnvio}
            `;
    }
}