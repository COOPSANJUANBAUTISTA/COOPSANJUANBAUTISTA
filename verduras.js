window.verdurasInfo = {
    titulo: "Departamento de Verduras y Hortalizas",
    desc: "Cosechadas directamente en el campo de Duaca, nuestras hortalizas garantizan la máxima frescura, sabor y calidad nutricional para tu hogar.",
    imagenes: [
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800", // Mix de verduras
        "https://images.unsplash.com/photo-1597362925123-77861dcf3bc7?auto=format&fit=crop&q=80&w=800", // Tomates frescos
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800"  // Papas y raíces
    ],
    productos: [
        { nombre: "Tomate Perita", desc: "Fresco y de excelente calidad.", imagen: "https://images.unsplash.com/photo-1597362925123-77861dcf3bc7?auto=format&fit=crop&q=80&w=400" },
        { nombre: "Cebolla", desc: "Cosecha local de Duaca.", imagen: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=400" },
        { nombre: "Papa Arratia", desc: "Ideal para todo tipo de platos.", imagen: "https://images.unsplash.com/photo-1518977676601-b5ff82803c37?auto=format&fit=crop&q=80&w=400" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const v = window.verdurasInfo;
    if(document.getElementById('verduras-titulo')) document.getElementById('verduras-titulo').innerText = v.titulo;
    if(document.getElementById('verduras-desc')) document.getElementById('verduras-desc').innerText = v.desc;
    const lista = document.getElementById('verduras-lista');
    if(lista && v.productos) {
        lista.innerHTML = v.productos.map(p => `
            <div class="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition">
                <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-32 object-cover rounded-xl mb-3">
                <h4 class="font-bold text-amber-200 text-base">${p.nombre}</h4>
                <p class="text-xs text-white/70 mt-1">${p.desc}</p>
            </div>
        `).join('');
    }
});
