function reloadPage() {location.reload();}

let input = document.querySelector('#price')
let error = document.querySelector('span ')
let form = document.querySelector('#form')
let button1 = document.querySelector('.button-primary')
let button2 = document.querySelector('.button-secondary')

error.style.display = "none"
button2.style.display = "none"

let randomNumber = Math.floor(Math.random() * 10001)
let attempts = 0
let chosenNumber

function check(number) {
    let instruction = document.createElement('div')

    if (number < randomNumber) {
        instruction.textContent = `#${attempts} ( ${number} ) C'est Plus !`
        instruction.className = "instruction plus"
    } else if (number > randomNumber) {
        instruction.textContent = `#${attempts} ( ${number} ) C'est moins !`
        instruction.className = "instruction moins"
    } else {
        instruction.textContent = `#${attempts} ( ${number} ) Félicitation vous avez trouvé le juste prix !`
        instruction.className = "instruction fini"
        input.disabled = true
        button1.style.display = "none"
        button2.style.display = "inline"
    }
    document.querySelector("#instructions").prepend(instruction)
}

input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = "inline"
    } else {
        error.style.display = "none"
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (isNaN(input.value) || input.value === "") {
        input.style.borderColor = "red"
    } else {
        attempts++
        input.style.borderColor = "#D0F4DE"
        chosenNumber = input.value
        input.value = ""
        check(chosenNumber)
    }
})
