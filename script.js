let produto1 = document.querySelector('.value_1 input');
let produto2 = document.querySelector('.value_2 input');
let valueX = document.querySelector('.value_3 input');
let calc = document.querySelector('.calc');
let clear = document.querySelector('.clear');
let screen = document.querySelector('.result_screen h1');





calc.addEventListener('click', () => CalcValues());
clear.addEventListener('click', () => ClearValues());


function CalcValues() {
    if (produto1.value !== '' && produto2.value !== '' && valueX.value !== '') {
        let value = (valueX.value * produto2.value) / produto1.value;


        screen.innerHTML = "O valor de peças que faltam do 615 é : " + Math.round(value);
        screen.style.display = 'flex';
    } else {
        screen.innerHTML = "Digite um valor em todos os campos!";
        screen.style.display = 'flex';
        setTimeout(() => ClearValues(),1500);
    }
}

function ClearValues() {
    produto1.value = '';
    produto2.value = '';
    valueX.value = '';

    screen.innerHTML = " ";
    screen.style.display = 'none';
}