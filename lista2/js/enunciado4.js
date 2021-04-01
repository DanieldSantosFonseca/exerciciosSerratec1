//FUNÇÃO CALCULAR ENUNCIADO 2

let e4_primeiro = document.getElementById('e4-1numero')

let e4_segundo = document.getElementById('e4-2numero')

let e4_terceiro = document.getElementById('e4-3numero')

let e4_resposta = document.getElementById('e4-resposta')

e4_primeiro.addEventListener("click", function () {
    calcularE4();
});

e4_segundo.addEventListener("click", function () {
    calcularE4();
});

e4_terceiro.addEventListener("click", function () {
    calcularE4();
});


function calcularE4() {

    let valor1 = Number(e4_primeiro.value);
    let valor2 = Number(e4_segundo.value);
    let valor3 = Number(e4_terceiro.value);

    if(valor1 < valor2 && valor1 < valor3){
        e4_resposta.innerText = `O menor é o primeiro número`
    } else if (valor2 < valor1 && valor2 < valor3){
        e4_resposta.innerText = `O menor é o segundo número`
    } else if (valor3 < valor1 && valor3 < valor2){
        e4_resposta.innerText = `O menor é o teceiro número`
    } else {
        e4_resposta.innerText = `escreva números diferentes`
    }
    
}
