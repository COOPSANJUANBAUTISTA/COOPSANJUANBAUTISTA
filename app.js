// Archivo: app.js (Restaurada la funcionalidad de carruseles de imágenes)

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CARGA DE TÍTULOS Y DESCRIPCIONES ---

    // Verduras
    const vTitle = document.getElementById("verduras-titulo");
    const vDesc = document.getElementById("verduras-desc");
    if (vTitle && typeof verdurasInfo !== 'undefined' && verdurasInfo.titulo) {
        vTitle.innerText = verdurasInfo.titulo;
    }
    if (vDesc && typeof verdurasInfo !== 'undefined' && verdurasInfo.descripcion) {
        vDesc.innerText = verdurasInfo.descripcion;
    }

    // Frutería
    const fTitle = document.getElementById("fruteria-titulo");
    const fDesc = document.getElementById("fruteria-desc");
    if (fTitle && typeof fruteriaInfo !== 'undefined' && fruteriaInfo.titulo) {
        fTitle.innerText = fruteriaInfo.titulo;
    }
    if (fDesc && typeof fruteriaInfo !== 'undefined' && fruteriaInfo.descripcion) {
        fDesc.innerText = fruteriaInfo.descripcion;
    }

    // Charcutería
    const cTitle = document.getElementById("charcuteria-titulo");
    const cDesc = document.getElementById("charcuteria-desc");
    if (cTitle && typeof charcuteriaInfo !== 'undefined' && charcuteriaInfo.titulo) {
        cTitle.innerText = charcuteriaInfo.titulo;
    }
    if (cDesc && typeof charcuteriaInfo !== 'undefined' && charcuteriaInfo.descripcion) {
        cDesc.innerText = charcuteriaInfo.descripcion;
    }

    // --- 2. LÓGICA DE LOS CARRUSELES DE IMÁGENES ---

    // Función para renderizar y animar el carrusel
    function crearCarrusel(contenedorId, listaImagenes) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor || !listaImagenes || listaImagenes.length === 0) return;

        // Limpia el contenedor y crea los elementos <img>
        contenedor.innerHTML = listaImagenes.map((src, index) => 
            `<img src="${src}" class="${index === 0 ? 'active' : ''}" alt="Imagen de departamento">`
        ).join('');

        let indiceActual = 0;
        const imagenes = contenedor.querySelectorAll('img');

        // Si hay más de una imagen, inicia la rotación cada 3.5 segundos
        if (imagenes.length > 1) {
            setInterval(() => {
                imagenes[indiceActual].classList.remove('active');
                indiceActual = (indiceActual + 1) % imagenes.length;
                imagenes[indiceActual].classList.add('active');
            }, 3500);
        }
    }

    // --- 3. INICIALIZACIÓN DE CARRUSELES ---
    // (Asegúrate de ajustar los nombres/rutas de las imágenes según lo que tengas subido)

    // Si los arrays de imágenes están dentro de verdurasInfo, fruteriaInfo, etc., los usa.
    // Si no, usa las listas definidas aquí abajo como respaldo.

    const imagenesVerduras = (typeof verdurasInfo !== 'undefined' && verdurasInfo.imagenes) 
        ? verdurasInfo.imagenes 
        : ['fruteria.png/v1.jpg', 'fruteria.png/v2.jpg'];

    const imagenesFruteria = (typeof fruteriaInfo !== 'undefined' && fruteriaInfo.imagenes) 
        ? fruteriaInfo.imagenes 
        : ['fruteria.png/f1.jpg', 'fruteria.png/f2.jpg'];

    const imagenesCharcuteria = (typeof charcuteriaInfo !== 'undefined' && charcuteriaInfo.imagenes) 
        ? charcuteriaInfo.imagenes 
        : ['logo.jpg/c1.jpg', 'logo.jpg/c2.jpg'];

    // Ejecuta los carruseles en sus respectivos contenedores
    crearCarrusel('carrusel-verduras', imagenesVerduras);
    crearCarrusel('carrusel-fruteria', imagenesFruteria);
    crearCarrusel('carrusel-charcuteria', imagenesCharcuteria);
});
