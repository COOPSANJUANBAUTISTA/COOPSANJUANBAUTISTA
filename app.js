// URL de Google Apps Script (Google Sheets Backend)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzZnb85tPJR7fTt-mJWW9qZ2huk--pU_d7KPwE2RP9RRIcII5ti8Xyh-QtpqMFrBrdN/exec";

// PALETAS DE COLORES POR DEPARTAMENTO
const paletaColores = {
    inicio:        { noche: '#2d6a4f', dia: '#e8f5e9' },
    verduras:      { noche: '#1b4332', dia: '#d8f3dc' },
    fruteria:      { noche: '#991b1b', dia: '#ffe3e3' },
    charcuteria:   { noche: '#4c0519', dia: '#ffe4e6' },
    artesania:     { noche: '#78350f', dia: '#fef3c7' },
    informaciones: { noche: '#1e1b4b', dia: '#eef2ff' }
};

let departamentoActual = 'inicio';
let esModoDia = false;

const ordenDepartamentos = ['inicio', 'verduras', 'fruteria', 'charcuteria', 'artesania', 'informaciones'];

// CAMBIAR PESTAÑA
function cambiarPestana(nombreTab) {
    departamentoActual = nombreTab;
    aplicarColorDeFondo();

    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    const panelActivo = document.getElementById(`tab-${nombreTab}`);
    if (panelActivo) panelActivo.classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab'));
    const botonActivo = document.getElementById(`btn-${nombreTab}`);
    if (botonActivo) {
        botonActivo.classList.add('active-tab');
        botonActivo.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function siguienteDepartamento() {
    const indiceActual = ordenDepartamentos.indexOf(departamentoActual);
    const siguienteIndice = (indiceActual + 1) % ordenDepartamentos.length;
    cambiarPestana(ordenDepartamentos[siguienteIndice]);
}

function anteriorDepartamento() {
    const indiceActual = ordenDepartamentos.indexOf(departamentoActual);
    const anteriorIndice = (indiceActual - 1 + ordenDepartamentos.length) % ordenDepartamentos.length;
    cambiarPestana(ordenDepartamentos[anteriorIndice]);
}

// APLICAR COLOR DE FONDO
function aplicarColorDeFondo() {
    const colores = paletaColores[departamentoActual] || paletaColores.inicio;
    const colorFinal = esModoDia ? colores.dia : colores.noche;
    const body = document.getElementById('main-body');
    if (body) {
        body.style.backgroundColor = colorFinal;
    }
}

// ALTERNAR DÍA / NOCHE
function toggleModoDiaNoche() {
    esModoDia = !esModoDia;
    const body = document.getElementById('main-body');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    if (esModoDia) {
        if (body) body.classList.add('light-mode');
        if (themeIcon) themeIcon.innerText = '☀️';
        if (themeText) themeText.innerText = 'Día';
    } else {
        if (body) body.classList.remove('light-mode');
        if (themeIcon) themeIcon.innerText = '🌙';
        if (themeText) themeText.innerText = 'Noche';
    }

    aplicarColorDeFondo();
}

// CARGAR DATOS DINÁMICOS DESDE GOOGLE SHEETS
async function cargarDatosDinamicos() {
    try {
        const respuesta = await fetch(APPS_SCRIPT_URL);
        const datos = await respuesta.json();

        if (!Array.isArray(datos)) return;

        const contenedorAvisos = document.getElementById('contenedor-cartelera');
        const avisos = datos.filter(d => d.clave && ['REUNIÓN', 'REUNION', 'JORNADA', 'COMUNICADO', 'AVISO'].includes(d.clave.toUpperCase()));

        if (contenedorAvisos && avisos.length > 0) {
            contenedorAvisos.innerHTML = '';
            avisos.forEach(item => {
                contenedorAvisos.innerHTML += `
                    <div class="liquid-card p-6 space-y-2">
                        <div class="flex justify-between items-center">
                            <span class="text-xs font-bold dark-highlight uppercase">${item.clave || 'AVISO'}</span>
                            ${item.fecha_nota ? `<span class="text-[11px] text-sub-contrast opacity-80">${item.fecha_nota}</span>` : ''}
                        </div>
                        <h3 class="font-bold text-lg text-contrast">${item.titulo || ''}</h3>
                        <p class="text-xs text-sub-contrast leading-relaxed">${item.precio_detalle || ''}</p>
                    </div>
                `;
            });
        }
    } catch (error) {
        console.error("Error cargando información desde Google Sheets:", error);
    }
}

// INICIALIZACIÓN Y CARRUSELES
document.addEventListener("DOMContentLoaded", () => {
    aplicarColorDeFondo();
    cargarDatosDinamicos();

    function crearCarrusel(contenedorId, listaImagenes) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor || !listaImagenes || listaImagenes.length === 0) return;

        contenedor.innerHTML = listaImagenes.map((src, index) => 
            `<img src="${src}" class="foto-original ${index === 0 ? 'active' : ''}" alt="Foto producto" onError="this.style.display='none'">`
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

    const imgVerduras = (typeof verdurasInfo !== 'undefined' && verdurasInfo.imagenes) ? verdurasInfo.imagenes : ['repollo.png'];
    const imgFruteria = (typeof fruteriaInfo !== 'undefined' && fruteriaInfo.imagenes) ? fruteriaInfo.imagenes : ['fresa.png'];
    const imgCharcuteria = (typeof charcuteriaInfo !== 'undefined' && charcuteriaInfo.imagenes) ? charcuteriaInfo.imagenes : ['queso.png'];
    const imgArtesania = (typeof artesaniaInfo !== 'undefined' && artesaniaInfo.imagenes) ? artesaniaInfo.imagenes : ['artesania.png'];

    crearCarrusel('carrusel-verduras', imgVerduras);
    crearCarrusel('carrusel-fruteria', imgFruteria);
    crearCarrusel('carrusel-charcuteria', imgCharcuteria);
    crearCarrusel('carrusel-artesania', imgArtesania);
});

// GESTOS TÁCTILES
let touchstartX = 0, touchstartY = 0, touchendX = 0, touchendY = 0;
document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    const diffX = touchendX - touchstartX;
    const diffY = touchendY - touchstartY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX < 0) siguienteDepartamento();
        else anteriorDepartamento();
    }
}, { passive: true });
