//FUNÇÃO CALCULAR ENUNCIADO 1

let e4_primeiro = document.getElementById('e4-1numero');

let e4_segundo = document.getElementById('e4-2numero');

let e4_resposta = document.getElementById('e4-resposta')


e4_primeiro.addEventListener("click", function () {
    calculaE4();
});

e4_segundo.addEventListener("click", function () {
    calculaE4();
});

function calculaE4() {

    e4_resposta.innerHTML = 
    `
        A comissão sobre suas vendas é igual a ${(Number(e4_segundo.value)/100*4).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br>
        Seu salário total é igual a ${((Number(e4_segundo.value)/100*4) + Number(e4_primeiro.value)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
    `

}

