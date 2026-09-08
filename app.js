// PALETAS DE COLORES
const paletaColores = {
    inicio:       { noche: '#2d6a4f', dia: '#e8f5e9' },
    verduras:     { noche: '#1b4332', dia: '#d8f3dc' },
    fruteria:     { noche: '#991b1b', dia: '#ffe3e3' },
    charcuteria:  { noche: '#4c0519', dia: '#ffe4e6' },
    artesania:    { noche: '#78350f', dia: '#fef3c7' },
    funeraria:    { noche: '#1e293b', dia: '#f1f5f9' },
    historia:     { noche: '#3b0764', dia: '#f3e8ff' },
    informaciones:{ noche: '#1e1b4b', dia: '#eef2ff' }
};

let departamentoActual = 'inicio';
let esModoDia = false;

// CAMBIAR PESTAÑA
function cambiarPestana(nombreTab) {
    departamentoActual = nombreTab;
    aplicarColorDeFondo();

    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    const panelActivo = document.getElementById(`tab-${nombreTab}`);
    if (panelActivo) panelActivo.classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab'));
    const botonActivo = document.getElementById(`btn-${nombreTab}`);
    if (botonActivo) botonActivo.classList.add('active-tab');
}

// APLICAR FONDO
function aplicarColorDeFondo() {
    const colores = paletaColores[departamentoActual] || paletaColores.inicio;
    const colorFinal = esModoDia ? colores.dia : colores.noche;
    document.getElementById('main-body').style.backgroundColor = colorFinal;
}

// ALTERNAR DÍA / NOCHE
function toggleModoDiaNoche() {
    esModoDia = !esModoDia;
    const body = document.getElementById('main-body');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    if (esModoDia) {
        body.classList.add('light-mode');
        themeIcon.innerText = '☀️';
        themeText.innerText = 'Día';
    } else {
        body.classList.remove('light-mode');
        themeIcon.innerText = '🌙';
        themeText.innerText = 'Noche';
    }

    aplicarColorDeFondo();
}

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
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

    // MUESTRA DE IMÁGENES EN SU TAMAÑO ORIGINAL SIN ENCIERRO
    function crearCarrusel(contenedorId, listaImagenes) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor || !listaImagenes || listaImagenes.length === 0) return;

        contenedor.innerHTML = listaImagenes.map((src, index) => 
            `<img src="${src}" class="foto-original ${index === 0 ? 'active' : ''}" alt="Foto producto">`
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
