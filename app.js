// Archivo: app.js

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CARGA DE TÍTULOS Y DESCRIPCIONES ---

    // Verduras
    const vTitle = document.getElementById("verduras-titulo");
    const vDesc = document.getElementById("verduras-desc");
    if (vTitle && typeof verdurasInfo !== 'undefined' && verdurasInfo.titulo) {
        vTitle.innerText = verdurasInfo.titulo;
    }
    if (vDesc && typeof verdurasInfo !== 'undefined') {
        vDesc.innerText = verdurasInfo.desc || verdurasInfo.descripcion || '';
    }

    // Frutería
    const fTitle = document.getElementById("fruteria-titulo");
    const fDesc = document.getElementById("fruteria-desc");
    if (fTitle && typeof fruteriaInfo !== 'undefined' && fruteriaInfo.titulo) {
        fTitle.innerText = fruteriaInfo.titulo;
    }
    if (fDesc && typeof fruteriaInfo !== 'undefined') {
        fDesc.innerText = fruteriaInfo.desc || fruteriaInfo.descripcion || '';
    }

    // Charcutería
    const cTitle = document.getElementById("charcuteria-titulo");
    const cDesc = document.getElementById("charcuteria-desc");
    if (cTitle && typeof charcuteriaInfo !== 'undefined' && charcuteriaInfo.titulo) {
        cTitle.innerText = charcuteriaInfo.titulo;
    }
    if (cDesc && typeof charcuteriaInfo !== 'undefined') {
        cDesc.innerText = charcuteriaInfo.desc || charcuteriaInfo.descripcion || '';
    }

    // Artesanía
    const aTitle = document.getElementById("artesania-titulo");
    const aDesc = document.getElementById("artesania-desc");
    if (aTitle && typeof artesaniaInfo !== 'undefined' && artesaniaInfo.titulo) {
        aTitle.innerText = artesaniaInfo.titulo;
    }
    if (aDesc && typeof artesaniaInfo !== 'undefined') {
        aDesc.innerText = artesaniaInfo.desc || artesaniaInfo.descripcion || '';
    }

    // --- 2. LÓGICA DE LOS CARRUSELES DE IMÁGENES ---

    function crearCarrusel(contenedorId, listaImagenes) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor || !listaImagenes || listaImagenes.length === 0) return;

        contenedor.innerHTML = listaImagenes.map((src, index) => 
            `<img src="${src}" class="${index === 0 ? 'active' : ''}" alt="Imagen de departamento">`
        ).join('');

        let indiceActual = 0;
        const imagenes = contenedor.querySelectorAll('img');

        if (imagenes.length > 1) {
            setInterval(() => {
                imagenes[indiceActual].classList.remove('active');
                indiceActual = (indiceActual + 1) % imagenes.length;
                imagenes[indiceActual].classList.add('active');
            }, 3500);
        }
    }

    // --- 3. INICIALIZACIÓN DE CARRUSELES ---

    const imagenesVerduras = (typeof verdurasInfo !== 'undefined' && verdurasInfo.imagenes) ? verdurasInfo.imagenes : [];
    const imagenesFruteria = (typeof fruteriaInfo !== 'undefined' && fruteriaInfo.imagenes) ? fruteriaInfo.imagenes : [];
    const imagenesCharcuteria = (typeof charcuteriaInfo !== 'undefined' && charcuteriaInfo.imagenes) ? charcuteriaInfo.imagenes : [];
    const imagenesArtesania = (typeof artesaniaInfo !== 'undefined' && artesaniaInfo.imagenes) ? artesaniaInfo.imagenes : [];

    crearCarrusel('carrusel-verduras', imagenesVerduras);
    crearCarrusel('carrusel-fruteria', imagenesFruteria);
    crearCarrusel('carrusel-charcuteria', imagenesCharcuteria);
    crearCarrusel('carrusel-artesania', imagenesArtesania);

    // --- 4. CAMBIO DE COLOR DINÁMICO AL HACER SCROLL (ESTILO STARBUCKS) ---

    const secciones = document.querySelectorAll('.seccion-depto');
    
    const observerOptions = {
        root: null,
        threshold: 0.45 // Se activa cuando el 45% de la sección es visible
    };

    const colorObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const nuevoColor = entry.target.getAttribute('data-bg');
                if (nuevoColor) {
                    document.body.style.backgroundColor = nuevoColor;
                }
            }
        });
    }, observerOptions);

    secciones.forEach(sec => colorObserver.observe(sec));
});
