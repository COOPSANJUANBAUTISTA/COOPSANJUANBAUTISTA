window.fruteriaInfo = {
    titulo: "Frutería Seleccionada",
    desc: "Disfruta de frutas de temporada dulces, jugosas y llenas de vitaminas, seleccionadas cuidadosamente para llevar la energía del trópico a tu mesa.",
    imagenes: [
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800", // Frutas variadas
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800", // Bananos / Cambur
        "https://images.unsplash.com/photo-1519996521430-025f97749660?auto=format&fit=crop&q=80&w=800"  // Frutas tropicales
    ],
    productos: [
        { nombre: "Cambur Titiaro", desc: "Dulces y nutritivos.", imagen: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=400" },
        { nombre: "Lechosa", desc: "Excelente para jugos y digestión.", imagen: "https://images.unsplash.com/photo-1517282057600-b1d2c67d740c?auto=format&fit=crop&q=80&w=400" },
        { nombre: "Piña Regional", desc: "Aromática y jugosa.", imagen: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=400" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const f = window.fruteriaInfo;
    if(document.getElementById('fruteria-titulo')) document.getElementById('fruteria-titulo').innerText = f.titulo;
    if(document.getElementById('fruteria-desc')) document.getElementById('fruteria-desc').innerText = f.desc;
    const lista = document.getElementById('fruteria-lista');
    if(lista && f.productos) {
        lista.innerHTML = f.productos.map(p => `
            <div class="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition">
                <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-32 object-cover rounded-xl mb-3">
                <h4 class="font-bold text-amber-200 text-base">${p.nombre}</h4>
                <p class="text-xs text-white/70 mt-1">${p.desc}</p>
            </div>
        `).join('');
    }
});
