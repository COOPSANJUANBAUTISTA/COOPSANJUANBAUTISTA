window.verdurasInfo = {
    titulo: "Departamento de Verduras y Hortalizas",
    desc: "Cosechadas directamente en el campo de Duaca, nuestras hortalizas garantizan la máxima frescura, sabor y calidad nutricional para tu hogar.",
    imagenes: [
        "logo.jpg/05.jpeg",
        "logo.jpg/Brinjal.jpeg",
        "logo.jpg/Isolated ear corn.jpeg",
        "logo.jpg/Tomato stock image_ Image of produce, ripe, tomato, isolated - 25211279.jpeg",
        "logo.jpg/Purple Cabbage on Transparent.jpeg",
        "logo.jpg/The Benefits of Beets - Health Best.jpeg",
        "logo.jpg/10696117857857068.jpeg",
        "logo.jpg/1266706141909822.jpeg",
        "logo.jpg/16044142419491668.jpeg",
        "logo.jpg/1829656092154284.jpeg",
        "logo.jpg/19351473395653597.jpeg",
        "logo.jpg/35043703347205935.jpeg",
        "logo.jpg/3588874698438976.jpeg",
        "logo.jpg/3940718421083158.jpeg",
        "logo.jpg/590886413661244468.jpeg",
        "logo.jpg/68749509993.jpeg",
        "logo.jpg/descarga (4).jpeg"
    ],
    productos: [
        { nombre: "Tomate Fresco", desc: "Seleccionado del campo local.", imagen: "logo.jpg/Tomato stock image_ Image of produce, ripe, tomato, isolated - 25211279.jpeg" },
        { nombre: "Berenjena", desc: "Cosecha fresca y de calidad.", imagen: "logo.jpg/Brinjal.jpeg" },
        { nombre: "Maíz tierno", desc: "Ideal para todo tipo de preparaciones.", imagen: "logo.jpg/Isolated ear corn.jpeg" }
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
