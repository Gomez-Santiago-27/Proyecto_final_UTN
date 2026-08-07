import express from 'express';
import multer from 'multer'; // middleware
import fs from 'fs';
import cors from 'cors';
// ===========================
import Producto from './src/js/models/Producto.js';
//import archivoDeProductosJson from './src/data/productos.json';
import { existeArchivoJSON } from './src/js/utils/existeArchivoJson.js';
import { guardarProductoEnJSON } from './src/js/utils/guardarProductoEnJson.js';

const app = express();
const upload = multer( { dest : './src/assets/uploads'} );
const PUERTO = process.env.PORT || 3000;

app.use(cors());
// Middleware para parsear datos de formularios (texto) 
app.use(express.urlencoded({ extended: true }));

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en puerto ${PUERTO}...`);
});

app.get('/', (req, res) => {
    res.json('Bienvenido a mi Servidor de Node.js');
});

// Cargar productos.json 
app.post('/images/single', upload.single('imagen'), (req, res) => {
    guardarProductoEnJSON(req.file, req.body.descripcion, req.body.categoria, req.body.precio);

     /*muestra los campos del formulario
     console.log(req.file, req.body);*/
     res.send('Se subio correctamente'); // mensaje para el front.
});

// Obtener lista de productos
app.get('/productos', (req, res) => {
    let productos = JSON.parse(fs.readFileSync('./src/data/productos.json', 'utf8'));

    res.json(productos);
});

// Eliminar producto por ID
app.delete('/productos/:id', (req, res) => {
    const id = req.params.id;

    let productos = [];
    if (fs.existsSync('./src/data/productos.json')) {
        productos = JSON.parse(fs.readFileSync('./src/data/productos.json', 'utf8'));
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
    fs.writeFileSync('./src/data/productos.json', JSON.stringify(productos, null, 2));

    res.send('Producto eliminado correctamente');
});