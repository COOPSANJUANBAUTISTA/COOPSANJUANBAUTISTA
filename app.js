// Cargar datos de Verduras
document.getElementById("verduras-titulo").innerText = verdurasInfo.titulo;
document.getElementById("verduras-desc").innerText = verdurasInfo.descripcion;
document.getElementById("verduras-img").src = verdurasInfo.imagen;

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

// Cargar datos de Frutería
document.getElementById("fruteria-titulo").innerText = fruteriaInfo.titulo;
document.getElementById("fruteria-desc").innerText = fruteriaInfo.descripcion;
document.getElementById("fruteria-img").src = fruteriaInfo.imagen;

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

// Cargar datos de Charcutería
document.getElementById("charcuteria-titulo").innerText = charcuteriaInfo.titulo;
document.getElementById("charcuteria-desc").innerText = charcuteriaInfo.descripcion;
document.getElementById("charcuteria-img").src = charcuteriaInfo.imagen;

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
