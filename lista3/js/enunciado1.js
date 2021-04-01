//FUNÇÃO CALCULAR ENUNCIADO 1

let e1_primeiro = document.getElementById('e1-1numero');

let e1_segundo = document.getElementById('e1-2numero');

let e1_terceiro = document.getElementById('e1-3numero');

e1_primeiro.addEventListener("click", function () {
    calculaE1();
});

e1_segundo.addEventListener("click", function () {
    calculaE1();
});

e1_terceiro.addEventListener("click", function () {
    calculaE1();
});


function calculaE1() {
    let media = (Number(e1_primeiro.value) + Number(e1_segundo.value) + Number(e1_terceiro.value)) / 3
    if(e1_primeiro.value < 0 || e1_primeiro.value > 10 || e1_segundo.value > 10 || e1_segundo.value > 10 || e1_terceiro.value > 10 || e1_terceiro.value > 10 ){
        document.getElementById('e1-resposta').innerHTML = `<p style="color: red;">Por favor, digite um número de 0 a 10</p>`;
    } else {
        if (media <= 4) {
            document.getElementById('e1-resposta').innerHTML = `<p style="color: red;">Sua média é igual a: ${media.toFixed(1)}, você foi reprovado</p>`;
        } else if (media < 7) {
            document.getElementById('e1-resposta').innerHTML = `<p style="color: orange;">Sua média é igual a: ${media.toFixed(1)}, você está de recuperação</p>`;
        } else {
            document.getElementById('e1-resposta').innerHTML = `<p style="color: green;">Sua média é igual a: ${media.toFixed(1)}, você foi aprovado</p>`;
        }
    }
}



