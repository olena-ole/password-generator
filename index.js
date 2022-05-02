'use strict'

const generateShortBtn = document.querySelector('#generate-short');
const generateLongBtn = document.querySelector('#generate-long');
const inputsArr = document.querySelectorAll('input');

function generateRandomSymbol(min = 33, max = 126) {
    return String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
};

function generatePass(num) {
    let password = '';
    for (let i = 1; i < num; i++) {
        password += generateRandomSymbol();
    }
    return password;
};


generateShortBtn.addEventListener('click', () => {
    inputsArr.forEach(el => {
        el.value = generatePass(8);
    })
});

generateLongBtn.addEventListener('click', () => {
    inputsArr.forEach(el => {
        el.value = generatePass(16);
    })
});
