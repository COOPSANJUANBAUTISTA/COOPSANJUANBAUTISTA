window.verdurasInfo = {
    titulo: "Departamento de Verduras y Hortalizas",
    desc: "Cosechadas directamente en el campo de Duaca, nuestras hortalizas garantizan la máxima frescura, sabor y calidad nutricional para tu hogar.",
    imagenes: [
        "logo.jpg/nombre_foto_carrusel_1.jpg",
        "logo.jpg/nombre_foto_carrusel_2.jpg",
        "logo.jpg/nombre_foto_carrusel_3.jpg"
    ],
    productos: [
        { nombre: "Tomate Perita", desc: "Fresco y de excelente calidad.", imagen: "logo.jpg/tomate.jpg" },
        { nombre: "Cebolla", desc: "Cosecha local de Duaca.", imagen: "logo.jpg/cebolla.jpg" },
        { nombre: "Papa Arratia", desc: "Ideal para todo tipo de platos.", imagen: "logo.jpg/papa.jpg" }
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
