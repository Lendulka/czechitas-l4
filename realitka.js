// tady je místo pro náš program

// REALITKA

const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
        floorage: 100,
        balcony: 2,
        units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
        rent: 28000,
        fees: {
            water: 1000,
            energy: 2500,
            services: 560,
        },
        currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3
}

// a) Pomocí tečkové notace vypište do stránky dispozici bytu.

let dispozice = document.querySelector(".dispozice")
dispozice.innerHTML = "<span> Dispozice bytu: " + apartment.disposition + "</span>"

// b) Vypište do stránky čistý nájem bez poplatků.

let najem = document.querySelector(".najem")
najem.innerHTML = "<span> Čistý nájem bez poplatků: " + apartment.price.rent + " " + apartment.price.currency + "</span>"

// ba) Vypište do stránky nájem včetně poplatků za služby.

function celkovaPlatba() {
    const { rent, fees, currency } = apartment.price
    let mesicniPlatba = (rent + fees.water + fees.energy + fees.services)
    let najemPoplatkyElm = document.querySelector(".najemPoplatky")
    najemPoplatkyElm.innerHTML = "<span> Nájem včetně poplatků za služby: " + mesicniPlatba + " " + currency + "</span>"
}

celkovaPlatba()

// c) Vypište do stránky celý objekt představující výměru bytu.

const { floorage, balcony, units } = apartment.area
let vymera = document.querySelector(".vymera")
vymera.innerHTML = "<span> Výměra bytu: " + floorage + " " + units + ", " + "počet balkonů: " + balcony + "</span>"

// d) Pomocí destrukturování si do separátních proměnných uložte město a městskou část. Vypište je do stránky.

const { city, district } = apartment
let mesto = document.querySelector(".mesto")
mesto.innerHTML = "<span> Město: " + city + ", " + district + "</span>"

// e) Změnte stav inzerátu z 'free' na 'taken'.

apartment.status = "taken"
const stavElm = document.querySelector(".stav")
stavElm.innerHTML = "<span> Stav: " + apartment.status + "</span>"
