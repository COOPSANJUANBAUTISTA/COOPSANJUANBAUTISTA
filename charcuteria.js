window.charcuteriaInfo = {
    titulo: "Charcutería y Víveres",
    desc: "Productos de alta calidad para complementar tu despensa, incluyendo embutidos seleccionados, quesos artesanales y víveres de primera necesidad.",
    imagenes: [
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800", // Quesos y embutidos
        "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=800", // Cortes selectos
        "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=800"  // Charcutería general
    ],
    productos: [
        { nombre: "Queso Llanero", desc: "Salado y firme, ideal para arepas.", imagen: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400" },
        { nombre: "Jamón Pierna", desc: "Frescura garantizada.", imagen: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=400" },
        { nombre: "Queso Mozzarella", desc: "Textura cremosa y fundible.", imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const c = window.charcuteriaInfo;
    if(document.getElementById('charcuteria-titulo')) document.getElementById('charcuteria-titulo').innerText = c.titulo;
    if(document.getElementById('charcuteria-desc')) document.getElementById('charcuteria-desc').innerText = c.desc;
    const lista = document.getElementById('charcuteria-lista');
    if(lista && c.productos) {
        lista.innerHTML = c.productos.map(p => `
            <div class="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition">
                <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-32 object-cover rounded-xl mb-3">
                <h4 class="font-bold text-amber-200 text-base">${p.nombre}</h4>
                <p class="text-xs text-white/70 mt-1">${p.desc}</p>
            </div>
        `).join('');
    }
});
