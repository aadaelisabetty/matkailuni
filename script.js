const matkat = [
    {
        kohde: "Pariisi, Ranska",
        hotelliUrl: "https://www.ritzparis.com",
        kuva: "https://picsum.photos/id/1011/500/400",
        terveiset: "Ihana kaupunki! Söin liikaa croissantteja ja ihastuin Eiffeliin. Hotelli oli upea!"
    },
    {
        kohde: "Tokio, Japani",
        hotelliUrl: "https://www.parkhyatttokyo.com",
        kuva: "https://picsum.photos/id/1016/500/400",
        terveiset: "Neonvaloja ja maailman parasta sushia. Täällä on aina jotain uutta nähtävää!"
    },
    {
        kohde: "Rooma, Italia",
        hotelliUrl: "https://www.hoteldebussie.com",
        kuva: "https://picsum.photos/id/1033/500/400",
        terveiset: "Parasta pizzaa ja gelatoa! Colosseum oli livenä vielä hienompi kuin kuvissa."
    },
    {
        kohde: "Lappi, Suomi",
        hotelliUrl: "https://www.kakslauttanen.fi",
        kuva: "https://picsum.photos/id/1029/500/400",
        terveiset: "Revontulia ja pakkasta! Iglussa nukkuminen oli aivan unohtumaton kokemus."
    }
];

// Alapuolella oleva koodi pysyy samana kuin aiemmin:
const container = document.getElementById('postikortit-container');

container.innerHTML = ''; // Tyhjennetään kontti varmuuden vuoksi

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