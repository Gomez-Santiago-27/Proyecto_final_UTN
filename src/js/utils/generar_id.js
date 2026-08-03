import fs from 'fs';

export function generarID () {
    const data = fs.readFileSync(new URL('../data/productos.json', import.meta.url));
    const productos = JSON.parse(data);  
    const ultimo_id = productos[productos.length - 1].id;
    return ultimo_id + 1;
}