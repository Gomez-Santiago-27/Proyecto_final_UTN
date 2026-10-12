# Proyecto_final_UTN
En este repositorio guardo todos mis avances sobre mi proyecto.


'09-10-2026' ==> Se modifico el archivo index.html.

"Index.html" es ahora la pagina principal donde la persona que ingresa a la web elige si quiere 'ENTRAR' como USUARIO o ADMINISTRADOR.

En 'indexUser.html' se agregó un contenedor donde se alojan tanto los productos disponibles para pedir como también, los solicitados por el usuario. Se simplificó mucho más.

Productos disponibles |  Tu pedido


==> NUBE DE PENSAMIENTO

1) Agregar al formulario la opcion de 'Elegir fecha de envío'.

2) Crear una solicitud post para enviar el pedido.
        formPedido.addEventListener('submit', async (evento) => {
                evento.preventDefault();

        // cuerpo de la solicitud
        try {
           const respuesta = await fetch('/api/pedidos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cliente, productos: pedido })
        }); 
