'use strict'

const generateBtn = document.querySelector('#generate-btn');
const inputsArr = document.querySelectorAll('input');

function generateRandomSymbol(min = 33, max = 126) {
    return String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
}

function generatePass(num) {
    let password = '';
    for (let i = 1; i < num; i++) {
        password += generateRandomSymbol();
    }
    return password;
}


generateBtn.addEventListener('click', () => {
    inputsArr.forEach(el => {
        el.value = generatePass(16);
    })
})
