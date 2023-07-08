// OČKOVÁNÍ - OBJEKTY

let firstNameInput = prompt("What´s your first name?")
let surnameInput = prompt("What´s your surname?")
let ageInput = Number(prompt("How old are you?"))

const person = {
    firstName: firstNameInput,
    surname: surnameInput,
    age: ageInput,
}

function displayRegistered() {
    const { firstName, surname, age } = person
    const registrElm = document.querySelector(".registration")
    registrElm.innerHTML += `
        <p><span class="registration__name">Full name: ${firstName} ${surname}</span></p>
        <p><span class="registration__age">Age: ${age}</span></p>
    `
}

displayRegistered()

