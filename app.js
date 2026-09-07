// Archivo: app.js

function cambiarPestana(nombreTab, colorFondo) {
    // 1. Cambiar el color de fondo general con suave transición
    document.body.style.backgroundColor = colorFondo;

    // 2. Ocultar todos los paneles de pestañas
    const paneles = document.querySelectorAll('.tab-panel');
    paneles.forEach(panel => panel.classList.remove('active'));

    // 3. Mostrar el panel activo
    const panelActivo = document.getElementById(`tab-${nombreTab}`);
    if (panelActivo) {
        panelActivo.classList.add('active');
    }

    // 4. Actualizar botones del menú superior
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(btn => btn.classList.remove('active-tab'));

    const botonActivo = document.getElementById(`btn-${nombreTab}`);
    if (botonActivo) {
        botonActivo.classList.add('active-tab');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    // --- CARGA DINÁMICA DE INFORMACIÓN ---
    
    const cargarInfo = (idTitulo, idDesc, data) => {
        const titleEl = document.getElementById(idTitulo);
        const descEl = document.getElementById(idDesc);
        if (titleEl && data && data.titulo) titleEl.innerText = data.titulo;
        if (descEl && data) descEl.innerText = data.desc || data.descripcion || '';
    };

    if (typeof verdurasInfo !== 'undefined') cargarInfo("verduras-titulo", "verduras-desc", verdurasInfo);
    if (typeof fruteriaInfo !== 'undefined') cargarInfo("fruteria-titulo", "fruteria-desc", fruteriaInfo);
    if (typeof charcuteriaInfo !== 'undefined') cargarInfo("charcuteria-titulo", "charcuteria-desc", charcuteriaInfo);
    if (typeof artesaniaInfo !== 'undefined') cargarInfo("artesania-titulo", "artesania-desc", artesaniaInfo);

    // --- CARRUSELES DE IMÁGENES ---

    function crearCarrusel(contenedorId, listaImagenes) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor || !listaImagenes || listaImagenes.length === 0) return;

        contenedor.innerHTML = listaImagenes.map((src, index) => 
            `<img src="${src}" class="${index === 0 ? 'active' : ''}" alt="Imagen del departamento">`
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

    const imgVerduras = (typeof verdurasInfo !== 'undefined' && verdurasInfo.imagenes) ? verdurasInfo.imagenes : [];
    const imgFruteria = (typeof fruteriaInfo !== 'undefined' && fruteriaInfo.imagenes) ? fruteriaInfo.imagenes : [];
    const imgCharcuteria = (typeof charcuteriaInfo !== 'undefined' && charcuteriaInfo.imagenes) ? charcuteriaInfo.imagenes : [];
    const imgArtesania = (typeof artesaniaInfo !== 'undefined' && artesaniaInfo.imagenes) ? artesaniaInfo.imagenes : [];

    crearCarrusel('carrusel-verduras', imgVerduras);
    crearCarrusel('carrusel-fruteria', imgFruteria);
    crearCarrusel('carrusel-charcuteria', imgCharcuteria);
    crearCarrusel('carrusel-artesania', imgArtesania);
});
