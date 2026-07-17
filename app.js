import express from 'express';
import multer from 'multer'; // middleware
import fs from 'fs'; // fileSystem
import cors from 'cors';
import Producto from './public/clases/Producto.js';

const app = express();
const upload = multer( { dest : '/public/uploads/'} );
const PUERTO = process.env.PORT || 3000;

// Middleware para parsear datos de formularios (texto) 
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); // carpeta donde está eliminar_producto.html

app.use(cors());


app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en puerto ${PUERTO}...`);
});


/**
 * 
 * @param {*} path es la ruta donde se encuentra tu archivo .json.
 * @returns devuelve true, si el archivo existe en la ruta especificada. 
 * De lo contrario, false.
 */
function existeArchivoJSON(path) {
    return fs.existsSync(path);
}

/**
 * 
 * @param {*} file es la ruta donde se encuentran el archivo .json.
 * @param {*} arregloDeProductos es el arreglo que reemplazara al archivo .json.
 * post: Reemplaza el contenido de un archivo .json por el contenido que hay dentro
 * de un arreglo.
 */
function sobreescribirArchivoJSON(file, arregloDeProductos) {
    fs.writeFileSync(file, JSON.stringify(arregloDeProductos, null, 2));
} 

/**
 * 
 * @param {*} file 
 * @returns guarda el archivo con su nombre y su formato original.
 */
/*function guardarArchivoConNombreYFormato(file) { 
     const nuevaRuta = `./public/uploads/${file.originalname}`;
     fs.renameSync(file.path, nuevaRuta);
     return nuevaRuta;
}*/

function guardarProductoEnJSON(imagen, descripcion, categoria, precio) {
     // 1- Busca el archivo 'productos.json'
     let productos = [];
     if (existeArchivoJSON('./public/data/productos.json')) {
         productos = JSON.parse(fs.readFileSync('./public/data/productos.json', 'utf8'));
     }

     //2- crea el objeto Producto
     let nuevoProducto = new Producto(
        `./public/uploads/${imagen.originalname}`,
        descripcion, 
        categoria, 
        precio
        );

     productos.push(nuevoProducto);
     
     sobreescribirArchivoJSON('./public/data/productos.json', productos);
    
     console.log("Producto Guardado: ", nuevoProducto);
}

// Cargar productos.json 
app.post('/images/single', upload.single('imagen'), (req, res) => {
     // 1- guarda el archivo imagen en la ruta
     //guardarArchivoConNombreYFormato(req.file); 

     guardarProductoEnJSON(req.file, req.body.descripcion, req.body.categoria, req.body.precio);

     /*muestra los campos del formulario
     console.log(req.file, req.body);*/
     res.send('Se subio correctamente'); // mensaje para el front.
});

// Obtener lista de productos
app.get('/productos', (req, res) => {
    let productos = [];
    if (fs.existsSync('./public/data/productos.json')) {
        productos = JSON.parse(fs.readFileSync('./public/data/productos.json', 'utf8'));
    }
    res.json(productos);
});

// Eliminar producto por ID
app.delete('/productos/:id', (req, res) => {
    const id = req.params.id;

    let productos = [];
    if (fs.existsSync('./public/data/productos.json')) {
        productos = JSON.parse(fs.readFileSync('./public/data/productos.json', 'utf8'));
    }

    const producto = productos.find(p => p.id === id);
    if (!producto) {
        return res.status(404).send('Producto no encontrado');
    }

    // Eliminar imagen asociada
    if (fs.existsSync(producto.imagen)) {
        fs.unlinkSync(producto.imagen);
    }

    // Filtrar y guardar
    productos = productos.filter(p => p.id !== id);
    fs.writeFileSync('./public/data/productos.json', JSON.stringify(productos, null, 2));

    res.send('Producto eliminado correctamente');
});