// Función para hacer la transición automática de fotos (Carrusel)
function iniciarCarrusel(imgElementId, imagenesArray) {
    const imgElement = document.getElementById(imgElementId);
    if (!imgElement || !imagenesArray || imagenesArray.length === 0) return;
    
    let currentIndex = 0;
    imgElement.src = imagenesArray[0];
    
    // Cambia de foto cada 3.5 segundos con efecto de desvanecimiento
    setInterval(() => {
        currentIndex = (currentIndex + 1) % imagenesArray.length;
        imgElement.style.opacity = '0';
        setTimeout(() => {
            imgElement.src = imagenesArray[currentIndex];
            imgElement.style.opacity = '1';
        }, 300);
    }, 3500);
}

// --- VERDURAS ---
document.getElementById("verduras-titulo").innerText = verdurasInfo.titulo;
document.getElementById("verduras-desc").innerText = verdurasInfo.descripcion;
iniciarCarrusel("verduras-img", verdurasInfo.imagenes);

const listVerduras = document.getElementById("verduras-lista");
verdurasInfo.productos.forEach(p => {
    listVerduras.innerHTML += `
        <div class="bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg">
            <h4 class="font-bold text-amber-200 text-base">${p.nombre}</h4>
            <p class="text-xs text-white/70 mt-1">${p.desc}</p>
            <span class="inline-block mt-3 font-extrabold text-amber-300 text-sm">${p.precio}</span>
        </div>
    `;
});

// --- FRUTERÍA ---
document.getElementById("fruteria-titulo").innerText = fruteriaInfo.titulo;
document.getElementById("fruteria-desc").innerText = fruteriaInfo.descripcion;
iniciarCarrusel("fruteria-img", fruteriaInfo.imagenes);

const listFruteria = document.getElementById("fruteria-lista");
fruteriaInfo.productos.forEach(p => {
    listFruteria.innerHTML += `
        <div class="bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg">
            <h4 class="font-bold text-amber-200 text-base">${p.nombre}</h4>
            <p class="text-xs text-white/70 mt-1">${p.desc}</p>
            <span class="inline-block mt-3 font-extrabold text-amber-300 text-sm">${p.precio}</span>
        </div>
    `;
});

// --- CHARCUTERÍA ---
document.getElementById("charcuteria-titulo").innerText = charcuteriaInfo.titulo;
document.getElementById("charcuteria-desc").innerText = charcuteriaInfo.descripcion;
iniciarCarrusel("charcuteria-img", charcuteriaInfo.imagenes);

const listCharcuteria = document.getElementById("charcuteria-lista");
charcuteriaInfo.productos.forEach(p => {
    listCharcuteria.innerHTML += `
        <div class="bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg">
            <h4 class="font-bold text-amber-200 text-base">${p.nombre}</h4>
            <p class="text-xs text-white/70 mt-1">${p.desc}</p>
            <span class="inline-block mt-3 font-extrabold text-amber-300 text-sm">${p.precio}</span>
        </div>
    `;
});
