// tady je místo pro náš program

// chceme evidovat doručovací adresu zákazníka e-shopu

const address = {
    streetName: "Budějovická",
    number: 311,
    city: "Jesenice",
    postalCode: "252 42",
    renters: {
        renter_1: "Lenka",
        renter_2: "Vláďa",
        renter_3: "Andulka"
    },
    payments: ['rent', 'electricity', 'water', 'maintenance']
}

console.log(address)
console.log(address.city)
console.log(address.renters.renter_1)
console.log(address.payments[0])

// chceme změnit hodnotu uvnitř objektu
// např. máme e-shop, máme nějakou výchozí adresu, nebo máme adresu nevyplněnou - a po uživateli chceme, aby ji opravil/doplnil

const vstupUzivatel = prompt('Zadej správné číslo domu.')
address.number = Number(vstupUzivatel)

console.log(address)

// zanořování objektů

const user = {
    fullName: 'Lenka Černohorská',
    login: 'lendulka',
    age: 49,
    address: {
        streetName: "Budějovická",
        number: 311,
        city: "Jesenice",
        postalCode: "252 42",
    },
    cartItems: 0,
}

console.log(user)

// destrukturování

const product = {
    name: "shirt",
    price: 1200,
    currency: "CZK",
    guarantee: "2 years"
}

const { name, price, currency, guarantee } = product
console.log(name + ", " + price + " " + currency + ", " + guarantee)








