// KNIHOVNA

const book1 = {
    title: "The Egg and I",
    author: "Betty MacDonald",
    pages: 272,
    publisher: {
        name: "Argo",
        year: "2016",
        ISBN: "978-80-257-1786-8"
    },
    "first edition": "1945",
    genre: ["novel", "humor", "biography"]
}

const book2 = {
    title: "Gone With the Wind",
    author: "Margaret Mitchell",
    pages: 456,
    publisher: {
        name: "Ikar",
        year: "2008",
        ISBN: "978-80-249-1147-2"
    },
    "first edition": "1936",
    genre: ["historical novel", "civil war", "slavery"]
}

// get keys of the objects

const keys1 = Object.keys(book1)
const keys2 = Object.keys(book2)
console.log(keys1, keys2)

// get values of the objects

const values1 = Object.values(book1)
const values2 = Object.values(book2)
console.log(values1, values2)

function displayBookOne() {
    const containerElm = document.querySelector(".container-book-1")
    for (let index = 0; index < 6; index++) {
        if (index !== 3 && index !== 5) {
            containerElm.innerHTML += `<p>${keys1[index]}: <strong>${values1[index]}</strong></p>`
        }
    }

    const { name, year, ISBN } = book1.publisher
    containerElm.innerHTML += `                 
        <p>publisher: <strong>${name}</strong></P>
        <p>year of publication: <strong>${year}</strong></p>
        <p>ISBN ${ISBN}</p>
    `

    containerElm.innerHTML += `
        <p>genre: <strong>${book1.genre[0]}, ${book1.genre[1]}, ${book1.genre[2]}</strong></p>
    `
}

displayBookOne()

function displayBookTwo() {
    const containerElm = document.querySelector(".container-book-2")
    for (let index = 0; index < 6; index++) {
        if (index !== 3 && index !== 5) {
            containerElm.innerHTML += `<p>${keys2[index]}: <strong>${values2[index]}</strong></p>`
        }
    }

    const { name, year, ISBN } = book2.publisher
    containerElm.innerHTML += `                 
        <p>publisher: <strong>${name}</strong></P>
        <p>year of publication: <strong>${year}</strong></p>
        <p>ISBN ${ISBN}</p>
    `

    containerElm.innerHTML += `
        <p>genre: <strong>${book2.genre[0]}, ${book2.genre[1]}, ${book2.genre[2]}</strong></p>
    `
}

displayBookTwo()





