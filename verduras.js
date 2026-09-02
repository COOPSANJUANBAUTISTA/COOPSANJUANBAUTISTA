window.verdurasInfo = {
    titulo: "Departamento de Verduras y Hortalizas",
    desc: "Cosechadas directamente en el campo de Duaca, nuestras hortalizas garantizan la máxima frescura, sabor y calidad nutricional para tu hogar.",
    imagenes: [
        "logo.jpg/0b12cbb6-053f-41fa-847b-41cad05ad9db_removalai_preview.png",
        "logo.jpg/1d72ca9d-5683-4090-903b-cb55161ea6eb_removalai_preview.png",
        "logo.jpg/23d067f8-0230-457d-abfd-80556ff27264_removalai_preview.png",
        "logo.jpg/23f33808-cf77-4968-a225-89698e227cff_removalai_preview.png",
        "logo.jpg/2a4ba879-0eb4-4052-a178-dcbe110b55ea_removalai_preview.png",
        "logo.jpg/2f6afdbc-0519-4e9c-bb38-0766cec47b2b_removalai_preview.png",
        "logo.jpg/3abf1a1a-35aa-47da-a0e0-fdea918bf598_removalai_preview.png",
        "logo.jpg/41c1e72a-e6da-461c-94a9-b835c33850d8_removalai_preview.png",
        "logo.jpg/42a78599-4362-4f65-8dae-2e3f2b5f1332_removalai_preview.png",
        "logo.jpg/48fa2840-430c-4a8d-a6a3-6c11b3495a8d_removalai_preview.png",
        "logo.jpg/6e051d1c-3109-4181-a7be-8a8396a33577_removalai_preview.png",
        "logo.jpg/84b4e5d1-2dab-4b15-b830-ef03b92f6679_removalai_preview.png",
        "logo.jpg/91020a70-96e6-4e56-97a0-f23958a71a7a_removalai_preview.png",
        "logo.jpg/a7f04413-8836-481e-b1ab-701c50fd8b72_removalai_preview.png",
        "logo.jpg/b55972f1-1ed7-4529-94da-70cee4708387_removalai_preview.png",
        "logo.jpg/c28b01bb-3233-4d0c-80c2-e9b8e584b555_removalai_preview.png",
        "logo.jpg/c3523d83-4cb3-4e96-b177-71f5532370ff_removalai_preview.png",
        "logo.jpg/ca681eda-6d72-4b4-b9ec-18870921e201_removalai_preview.png",
        "logo.jpg/d53ca533-4931-4a74-8204-d9d08038b331_removalai_preview.png",
        "logo.jpg/dd6ed450-7b9c-4e0d-9d2f-a928854a887f_removalai_preview.png",
        "logo.jpg/e723643a-c897-4b14-ba54-b04168ba2359_removalai_preview.png",
        "logo.jpg/f06aad12-4b03-4ede-8f8f-75ab6cb01fc7_removalai_preview.png",
        "logo.jpg/fa76a14d-fd22-447a-92b1-16fd8d21fcd3_removalai_preview.png"
    ],
    productos: [
        { nombre: "Tomate Fresco", desc: "Seleccionado del campo local.", imagen: "logo.jpg/0b12cbb6-053f-41fa-847b-41cad05ad9db_removalai_preview.png" },
        { nombre: "Hortaliza Selecta", desc: "Cosecha fresca y de calidad.", imagen: "logo.jpg/1d72ca9d-5683-4090-903b-cb55161ea6eb_removalai_preview.png" },
        { nombre: "Producto Natural", desc: "Ideal para todo tipo de preparaciones.", imagen: "logo.jpg/23d067f8-0230-457d-abfd-80556ff27264_removalai_preview.png" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const v = window.verdurasInfo;
    if(document.getElementById('verduras-titulo')) document.getElementById('verduras-titulo').innerText = v.titulo;
    if(document.getElementById('verduras-desc')) document.getElementById('verduras-desc').innerText = v.desc;
    const lista = document.getElementById('verduras-lista');
    if(lista && v.productos) {
        lista.innerHTML = v.productos.map(p => `
            <div class="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition flex flex-col justify-between">
                <div class="w-full h-36 bg-white rounded-xl mb-3 flex items-center justify-center p-3 overflow-hidden shadow-inner">
                    <img src="${p.imagen}" alt="${p.nombre}" class="max-h-full max-w-full object-contain">
                </div>
                <div>
                    <h4 class="font-bold text-amber-200 text-base">${p.nombre}</h4>
                    <p class="text-xs text-white/70 mt-1">${p.desc}</p>
                </div>
            </div>
        `).join('');
    }
});
