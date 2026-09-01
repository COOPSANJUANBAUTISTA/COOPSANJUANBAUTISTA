const siteData = {
    title: "Cooperativa San Juan Bautista | Verduras, Frutería y Charcutería",
    brandName: "Cooperativa San Juan Bautista",
    location: "Duaca - Lara",
    
    heroBadge: "Directo del campo a tu mesa",
    heroTitleHtml: 'Frescura y Tradición <span class="text-amber-300">Cooperativa</span>',
    heroDescription: "Ofrecemos verduras cosechadas diariamente, frutas selectas de temporada y charcutería artesanal de la mejor calidad para toda la comunidad.",
    heroBtnText: "Ver Catálogo Completo",
    
    centerTitle: "Selección del Día",
    centerSubtitle: "Verduras, Frutas & Embutidos Frescos",
    centerBadge: "100% Fresco",
    // Imagen real de alta calidad para la sección principal (Caja de productos frescos)
    mainProductImg: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
    
    card1Title: "Verduras",
    card1Desc: "Cosecha fresca diaria directo de agricultores locales con altos estándares de calidad.",
    card1Img: "https://images.unsplash.com/photo-1597362925123-77861dcf3bc7?auto=format&fit=crop&w=600&q=80",
    
    card2Title: "Frutería",
    card2Desc: "Frutas jugosas, dulces y de temporada seleccionadas minuciosamente para ti.",
    card2Img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80",
    
    card3Title: "Charcutería",
    card3Desc: "Variedad de quesos y embutidos artesanales ideales para el hogar.",
    card3Img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80",
    
    footerSlogan: "Confianza, trabajo en equipo y apoyo mutuo.",
    footerRif: "RIF: J-08501684-8",
    footerLocation: "Ubicados en Duaca, Estado Lara",
    priceText: "$X / Kg" // <--- Cambia este precio o indicador cuando quieras
};

// Inyectar datos automáticamente en la página
document.getElementById("page-title").innerText = siteData.title;
document.getElementById("brand-name").innerText = siteData.brandName;
document.getElementById("brand-location").innerText = siteData.location;
document.getElementById("hero-badge").innerText = siteData.heroBadge;
document.getElementById("hero-title").innerHTML = siteData.heroTitleHtml;
document.getElementById("hero-description").innerText = siteData.heroDescription;
document.getElementById("hero-btn").innerHTML = siteData.heroBtnText + ' <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>';
document.getElementById("center-title").innerText = siteData.centerTitle;
document.getElementById("center-subtitle").innerText = siteData.centerSubtitle;
document.getElementById("center-badge").innerText = siteData.centerBadge;
document.getElementById("main-product-img").src = siteData.mainProductImg;

document.getElementById("card1-title").innerText = siteData.card1Title;
document.getElementById("card1-desc").innerText = siteData.card1Desc;
document.getElementById("card1-img").src = siteData.card1Img;

document.getElementById("card2-title").innerText = siteData.card2Title;
document.getElementById("card2-desc").innerText = siteData.card2Desc;
document.getElementById("card2-img").src = siteData.card2Img;

document.getElementById("card3-title").innerText = siteData.card3Title;
document.getElementById("card3-desc").innerText = siteData.card3Desc;
document.getElementById("card3-img").src = siteData.card3Img;

document.getElementById("footer-slogan").innerText = siteData.footerSlogan;
document.getElementById("footer-rif").innerText = siteData.footerRif;
document.getElementById("footer-location").innerText = siteData.footerLocation;
document.getElementById("price-indicator").innerText = siteData.priceText;
