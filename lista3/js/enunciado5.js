//FUNÇÃO CALCULAR ENUNCIADO 1

let e5_primeiro = document.getElementById('e5-1numero');


let e5_1resposta = document.getElementById('e5-1resposta')
let e5_2resposta = document.getElementById('e5-2resposta')


e5_primeiro.addEventListener("click", function () {
    calculaE5();
});

function calculaE5() {

    e5_1resposta.innerHTML = (e5_primeiro.value/10*8).toLocaleString('pt-br')
    
    e5_2resposta.innerHTML = (e5_primeiro.value/10*2).toLocaleString('pt-br')
    
}

