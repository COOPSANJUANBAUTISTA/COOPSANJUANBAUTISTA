// Archivo: app.js (Actualizado para la nueva estructura HTML simplificada)

// Esta función es el punto de entrada cuando carga la página
document.addEventListener("DOMContentLoaded", () => {
    
    // --- VERDURAS ---
    // Asigna el título y la descripción desde el objeto global verdurasInfo (definido en verduras.js)
    const vTitle = document.getElementById("verduras-titulo");
    const vDesc = document.getElementById("verduras-desc");
    
    // Verificamos que existan los elementos antes de intentar escribir en ellos
    if (vTitle && typeof verdurasInfo !== 'undefined') {
        vTitle.innerText = verdurasInfo.titulo;
    }
    if (vDesc && typeof verdurasInfo !== 'undefined') {
        vDesc.innerText = verdurasInfo.descripcion;
    }

    // --- FRUTERÍA ---
    // Asigna el título y la descripción desde el objeto global fruteriaInfo (definido en fruteria.js)
    const fTitle = document.getElementById("fruteria-titulo");
    const fDesc = document.getElementById("fruteria-desc");
    
    if (fTitle && typeof fruteriaInfo !== 'undefined') {
        fTitle.innerText = fruteriaInfo.titulo;
    }
    if (fDesc && typeof fruteriaInfo !== 'undefined') {
        fDesc.innerText = fruteriaInfo.descripcion;
    }

    // --- CHARCUTERÍA ---
    // Asigna el título y la descripción desde el objeto global charcuteriaInfo (definido en charcuteria.js)
    const cTitle = document.getElementById("charcuteria-titulo");
    const cDesc = document.getElementById("charcuteria-desc");
    
    if (cTitle && typeof charcuteriaInfo !== 'undefined') {
        cTitle.innerText = charcuteriaInfo.titulo;
    }
    if (cDesc && typeof charcuteriaInfo !== 'undefined') {
        cDesc.innerText = charcuteriaInfo.descripcion;
    }
    
    // Nota: Se ha eliminado la funcionalidad de carrusel de imágenes y las listas de productos
    // detalladas, ya que los elementos HTML correspondientes fueron quitados del DOM.
    // El código ahora solo se encarga de mostrar los textos principales de cada departamento.
});
