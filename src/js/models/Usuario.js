class Usuario {

    constructor(nombre, apellido, email, contrasenia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasenia = contrasenia;
    }

    // Funciones del usuario

    hacerPedidos() {
        // logica de negocio
    }

    cancelarPedido() {
        // logica de negocio
    }


    mostrarInfoUsuario () {
        return `Nombre: ${this.nombre},
                Apellido: ${this.apellido}, 
                Email: ${this.email},
                Contrasenia: ${this.contrasenia}
            `;
    }
}