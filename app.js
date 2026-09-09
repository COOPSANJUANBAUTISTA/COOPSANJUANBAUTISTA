// URL de Google Apps Script (Google Sheets Backend)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzZnb85tPJR7fTt-mJWW9qZ2huk--pU_d7KPwE2RP9RRIcII5ti8Xyh-QtpqMFrBrdN/exec";

// PALETAS DE COLORES POR DEPARTAMENTO (NOCHE / DÍA)
const paletaColores = {
    inicio:        { noche: '#2d6a4f', dia: '#e8f5e9' },
    historia:      { noche: '#3b0764', dia: '#f3e8ff' },
    verduras:      { noche: '#1b4332', dia: '#d8f3dc' },
    fruteria:      { noche: '#991b1b', dia: '#ffe3e3' },
    charcuteria:   { noche: '#4c0519', dia: '#ffe4e6' },
    artesania:     { noche: '#78350f', dia: '#fef3c7' },
    funeraria:     { noche: '#1e293b', dia: '#f1f5f9' },
    informaciones: { noche: '#1e1b4b', dia: '#eef2ff' }
};

let departamentoActual = 'inicio';
let esModoDia = false;

// CAMBIAR PESTAÑA Y ACTUALIZAR COLOR
function cambiarPestana(nombreTab) {
    departamentoActual = nombreTab;
    aplicarColorDeFondo();

    // Ocultar todos los paneles
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    // Activar panel seleccionado
    const panelActivo = document.getElementById(`tab-${nombreTab}`);
    if (panelActivo) panelActivo.classList.add('active');

    // Actualizar botones de navegación
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab'));
    const botonActivo = document.getElementById(`btn-${nombreTab}`);
    if (botonActivo) {
        botonActivo.classList.add('active-tab');
        botonActivo.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Subir suavemente en móviles
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// APLICAR COLOR DE FONDO SEGÚN DEPARTAMENTO Y MODO
function aplicarColorDeFondo() {
    const colores = paletaColores[departamentoActual] || paletaColores.inicio;
    const colorFinal = esModoDia ? colores.dia : colores.noche;
    const body = document.getElementById('main-body');
    if (body) {
        body.style.backgroundColor = colorFinal;
    }
}

// ALTERNAR MODO DÍA / NOCHE
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

        // 1. HISTORIA / INICIO (Si existen registros clave)
        const itemHistoria = datos.find(d => (d.clave || d.departamento || '').toLowerCase() === 'historia');
        if (itemHistoria) {
            const hTitulo = document.getElementById('historia-titulo');
            const hDesc = document.getElementById('historia-descripcion');
            if (hTitulo) hTitulo.innerText = itemHistoria.titulo || 'Nuestra Historia';
            if (hDesc) hDesc.innerText = itemHistoria.descripcion || itemHistoria.precio_detalle || '';
        }

        // 2. POBLAR DEPARTAMENTOS CON TARJETAS
        const departamentos = ['verduras', 'fruteria', 'charcuteria', 'artesania', 'funeraria'];

        departamentos.forEach(dept => {
            const contenedor = document.getElementById(`contenedor-${dept}`);
            if (!contenedor) return;

            // Filtrar items correspondientes al departamento
            const itemsDept = datos.filter(d => {
                const dep = (d.departamento || d.clave || '').toLowerCase();
                return dep === dept;
            });

            if (itemsDept.length > 0) {
                contenedor.innerHTML = itemsDept.map(item => `
                    <div class="liquid-card p-6 space-y-3 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between gap-2 mb-1">
                                <span class="badge-etiqueta text-[10px] py-0.5 px-2.5">
                                    ${item.etiqueta || dept.toUpperCase()}
                                </span>
                                ${item.unidad ? `<span class="text-xs text-sub-contrast opacity-80 font-medium">${item.unidad}</span>` : ''}
                            </div>
                            <h3 class="font-black text-xl text-contrast">${item.titulo || item.producto || item.nombre || 'Producto'}</h3>
                            ${item.descripcion ? `<p class="text-xs text-sub-contrast leading-relaxed mt-2">${item.descripcion}</p>` : ''}
                        </div>
                        ${item.precio_detalle || item.precio ? `
                            <div class="pt-3 border-t border-white/10 flex justify-between items-center">
                                <span class="text-xs text-sub-contrast uppercase font-bold">Precio</span>
                                <span class="text-xl font-black dark-highlight">Bs. ${item.precio_detalle || item.precio}</span>
                            </div>
                        ` : ''}
                    </div>
                `).join('');
            } else {
                contenedor.innerHTML = `
                    <div class="col-span-full liquid-card p-8 text-center text-sub-contrast">
                        <p class="text-sm font-medium">Información en actualización para este departamento.</p>
                    </div>
                `;
            }
        });

        // 3. CARTELERA INFORMATIVA / COMUNICADOS
        const contenedorAvisos = document.getElementById('contenedor-cartelera');
        const palabrasClaveCartelera = ['reunión', 'reunion', 'jornada', 'comunicado', 'aviso', 'informaciones', 'informacion'];
        
        const avisos = datos.filter(d => {
            const depClave = (d.departamento || d.clave || '').toLowerCase();
            return palabrasClaveCartelera.includes(depClave);
        });

        if (contenedorAvisos && avisos.length > 0) {
            contenedorAvisos.innerHTML = avisos.map(item => `
                <div class="liquid-card p-6 space-y-3">
                    <div class="flex justify-between items-center">
                        <span class="badge-etiqueta text-[10px] py-0.5 px-2.5">${(item.clave || item.departamento || 'AVISO').toUpperCase()}</span>
                        ${item.fecha_nota || item.fecha ? `<span class="text-[11px] text-sub-contrast opacity-80 font-medium">${item.fecha_nota || item.fecha}</span>` : ''}
                    </div>
                    <h3 class="font-bold text-lg text-contrast">${item.titulo || item.nombre || 'Comunicado'}</h3>
                    <p class="text-xs text-sub-contrast leading-relaxed">${item.descripcion || item.precio_detalle || ''}</p>
                </div>
            `).join('');
        }

    } catch (error) {
        console.error("Error cargando información desde Google Sheets:", error);
    }
}

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    // 1. Aplicar fondo inicial
    aplicarColorDeFondo();

    // 2. Cargar datos dinámicos desde Google Sheets
    cargarDatosDinamicos();
});
