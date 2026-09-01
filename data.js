const siteData = {
    title: "Cooperativa San Juan Bautista | Verduras, Frutería y Charcutería",
    brandName: "Cooperativa San Juan Bautista",
    location: "Duaca - Lara",

    heroBadge: "Directo del campo a tu mesa",
    heroTitleHtml: 'Frescura y Tradición <span class="text-amber-300">Cooperativa</span>',
    heroDescription: "Ofrecemos verduras cosechadas diariamente, frutas selectas de temporada y charcutería artesanal para toda la comunidad.",
    heroBtnText: "Ver Catálogo Completo",

    centerTitle: "Selección del Día",
    centerSubtitle: "Verduras, Frutas & Embutidos",
    centerBadge: "100% Fresco",

    card1Title: "Verduras",
    card1Desc: "Cosecha fresca diaria",

    card2Title: "Frutería",
    card2Desc: "Frutas de temporada",

    card3Title: "Charcutería",
    card3Desc: "Embutidos y quesos artesanales",

    footerSlogan: "Confianza, trabajo en equipo y apoyo mutuo.",
    footerRif: "RIF: J-08501684-8",
    footerLocation: "Ubicados en Duaca, Estado Lara",
    priceText: "$X / Kg"
};

// Inyectar datos en la página
document.getElementById("page-title").innerText = siteData.title;
document.getElementById("brand-name").innerText = siteData.brandName;
document.getElementById("brand-location").innerText = siteData.location;
document.getElementById("hero-badge").innerText = siteData.heroBadge;
document.getElementById("hero-title").innerHTML = siteData.heroTitleHtml;
document.getElementById("hero-description").innerText = siteData.heroDescription;
document.getElementById("hero-btn").innerHTML = siteData.heroBtnText + ' <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>';
document.getElementById("center-title").innerText = siteData.centerTitle;
document.getElementById("center-subtitle").innerText = siteData.centerSubtitle;
document.getElementById("center-badge").innerText = siteData.centerBadge;
document.getElementById("card1-title").innerText = siteData.card1Title;
document.getElementById("card1-desc").innerText = siteData.card1Desc;
document.getElementById("card2-title").innerText = siteData.card2Title;
document.getElementById("card2-desc").innerText = siteData.card2Desc;
document.getElementById("card3-title").innerText = siteData.card3Title;
document.getElementById("card3-desc").innerText = siteData.card3Desc;
document.getElementById("footer-slogan").innerText = siteData.footerSlogan;
document.getElementById("footer-rif").innerText = siteData.footerRif;
document.getElementById("footer-location").innerText = siteData.footerLocation;
document.getElementById("price-indicator").innerText = siteData.priceText;
