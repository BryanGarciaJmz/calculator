let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

function updateCalculation(char) {
    calculation += char;
    handleCalculation();
    localStorage.setItem('calculation', JSON.stringify(calculation));
}

function resolve() {
    calculation = eval(calculation);
    handleCalculation();
}

function handleCalculation() {
    document.querySelector('.result div').innerHTML = `${calculation}`;
}

document.getElementById('one').addEventListener('click', () => {
    updateCalculation(1);
})

document.getElementById('two').addEventListener('click', () => {
    updateCalculation(2);
})

document.getElementById('three').addEventListener('click', () => {
    updateCalculation(3);
})

document.getElementById('four').addEventListener('click', () => {
    updateCalculation(4);
})

document.getElementById('five').addEventListener('click', () => {
    updateCalculation(5);
})

document.getElementById('six').addEventListener('click', () => {
    updateCalculation(6);
})

document.getElementById('seven').addEventListener('click', () => {
    updateCalculation(7);
})

document.getElementById('eight').addEventListener('click', () => {
    updateCalculation(8);
})

document.getElementById('nine').addEventListener('click', () => {
    updateCalculation(9);
})

document.getElementById('zero').addEventListener('click', () => {
    updateCalculation(0);
})

document.getElementById('plus').addEventListener('click', () => {
    updateCalculation(' + ');
})

document.getElementById('minus').addEventListener('click', () => {
    updateCalculation(' - ');
})

document.getElementById('multiply').addEventListener('click', () => {
    updateCalculation(' * ');
})

document.getElementById('dot').addEventListener('click', () => {
    updateCalculation('.');
})

document.getElementById('division').addEventListener('click', () => {
    updateCalculation(' / ');
})

document.getElementById('equal').addEventListener('click', () => {
    resolve();
})

document.getElementById('clear').addEventListener('click', () => {
    calculation = '';
    handleCalculation();
})
