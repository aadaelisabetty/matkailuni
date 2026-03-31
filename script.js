const matkat = [
    {
        id: 0,
        kohde: "Tukholma,Ruotsi",
        paakuva: "kuvat/tukholmar.JPEG", //Pääkuva näkyy ekana
        kaikkiKuvat: ["kuvat/tukholmatie.JPEG"],
        hotelli: "Viking Grace (Laivalla)",
        hotelliUrl: "https://www.vikingline.fi/",
        
        arvio: "⭐⭐⭐ - Kivaa tyttöjen kanssa, hyvä buffetti, mid bileet !",
        terveiset: "Tukholma kaipaisi enemmän aikaa kiertelyyn, Peppi Pitkätossumuseo oli söpö ja menisin uudestaan. Vähän jäi sellainen olo että olisipa ollut enemmän aikaa maissa."
    },
    {
        id: 1,
        kohde: "Kreeta, Kreikka",
        paakuva: "kuvat/kreikkam.JPEG",
        kaikkiKuvat: ["kuvat/kreikkaj.JPEG", "kuvat/kreikkat.JPEG"],
        hotelli: "El Greco",
        hotelliUrl: "https://www.aurinkomatkat.fi/kreikka/agios-nikolaos-kreeta/el-greco?modelCode=AGI",
        arvio: "⭐⭐⭐⭐ - Näkymät huoneesta olivat kuin elokuvasta.",
        terveiset: "Oli ihana pikkukaupunki ja hotelli ihan hyvä, miinusta että ilmastoinnista piti maksaa, muuten olisi ollut 5/5. UV oli korkealla ja jäätelö hyvää, ei tullut maha kipeäksi ollenkaan. Ainoa reissun miinus oli vähän auringoa liikaa saanut selkä."
    },
   {
        id: 2,
        kohde: "Rooma, Italia tulossa?",
        paakuva: "https://picsum.photos/id/1033/800/600",
        kaikkiKuvat: ["https://picsum.photos/id/1033/800/600"],
        hotelli: "Ei vielä tiedä",
        hotelliUrl: "#",
        arvio: "? /5 Toivottavasti pääsen vielä",
        terveiset: "Unelmana Colosseum!"
    },
    {
        id: 3,
        kohde: "Lappi,Ylläs,  Suomi",
        paakuva: "kuvat/revontuli.JPEG",
        kaikkiKuvat: ["kuvat/vrevo.JPEG", "kuvat/auringonlaskuy.JPEG", "kuvat/nukkumispaikkay.JPEG"],
        hotelli: "Airbnb",
        hotelliUrl: "Airbnb möksä ",
        arvio: "⭐⭐⭐⭐⭐ - Revontulien näkeminen on kaupunkilaiselle aina juhlaa.",
        terveiset: "Puhdas luonto ja hiljaisuus on kaunista, oli kylmintä mitä olen koskaan kokenut. Parhaimmillaan -40 ja silti kävimme jopa laskettelemassa kun oli -36 astetta. Lappi on vain aina ihanaa. "
    }
];

const container = document.getElementById('postikortit-container');
const kohdeNakyma = document.getElementById('kohde-nakyma');
const kohdeSisalto = document.getElementById('kohde-sisalto');
const otsikko = document.getElementById('paa-otsikko');

// Funktio joka rakentaa etusivun
function naytaPaasivu() {
    container.innerHTML = '';
    matkat.forEach(matka => {
        const kortti = document.createElement('div');
        kortti.className = 'postikortti';
        kortti.innerHTML = `
            <img src="${matka.paakuva}" alt="${matka.kohde}">
            <div class="kohde-linkki" onclick="naytaKohde(${matka.id})">${matka.kohde}</div>
        `;
        container.appendChild(kortti);
    });
}

// Funktio joka näyttää yhden kohteen tiedot
function naytaKohde(id) {
    const matka = matkat.find(m => m.id === id);
    
    // Piilotetaan etusivun osat
    container.style.display = 'none';
    otsikko.style.display = 'none';
    
    // Näytetään kohdesivu
    kohdeNakyma.style.display = 'block';

    // Tehdään kuvagalleria kaikista kuvista
    const galleriaHtml = matka.kaikkiKuvat.map(kuvaUrl => `
        <img src="${kuvaUrl}" alt="Matkakuva">
    `).join('');

    // Täytetään sisältö
    kohdeSisalto.innerHTML = `
        <h1>${matka.kohde}</h1>
        <div class="kuvagalleria">${galleriaHtml}</div>
        
        <div class="teksti-osio">
            <h3>Minun tarinani</h3>
            <p>${matka.terveiset}</p>
        </div>

        <div class="arvio-laatikko">
            <p><strong>Majoitus:</strong> <a href="${matka.hotelliUrl}" target="_blank">${matka.hotelli}</a></p>
            <p><strong>Minun arvioni:</strong> ${matka.arvio}</p>
        </div>
    `;
    
    // Kelataan sivu ylös, jotta näkyy alku
    window.scrollTo(0, 0);
}

// Funktio takaisin palaamiseen
function palaaTakaisin() {
    container.style.display = 'grid';
    otsikko.style.display = 'block';
    kohdeNakyma.style.display = 'none';
}

// Käynnistetään sovellus
naytaPaasivu();
