const matkat = [
    {
        kohde: "Pariisi, Ranska",
        hotelliUrl: "https://www.ritzparis.com",
        kuva: "https://picsum.photos/id/1011/500/400",
        terveiset: "Rakkautta ilmassa! Kävin Eiffelin juurella ja nautin maailman parhaista leivoksista. Hotelli oli aivan uskomaton."
    },
    {
        kohde: "Tokio, Japani",
        hotelliUrl: "https://www.parkhyatttokyo.com",
        kuva: "https://picsum.photos/id/1016/500/400",
        terveiset: "Täällä on aina vilinää! Valot, ruoka ja kulttuuri ovat jotain aivan muuta. En haluaisi lähteä kotiin."
    }
];

const container = document.getElementById('postikortit-container');

matkat.forEach(matka => {
    const kortti = document.createElement('div');
    kortti.className = 'postikortti';

    kortti.innerHTML = `
        <img src="${matka.kuva}" alt="${matka.kohde}">
        <a href="${matka.hotelliUrl}" target="_blank" class="kohde-linkki">${matka.kohde}</a>
        <p class="teksti">${matka.terveiset}</p>
    `;

    container.appendChild(kortti);
});