export function obtenerFecha() {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const anio = hoy.getFullYear();

    return `${dia}/${mes}/${anio}`; // "05/04/2026"
}