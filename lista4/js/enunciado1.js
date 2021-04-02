//FUNÇÃO CALCULAR ENUNCIADO 1

let e1_primeiro = document.getElementById('e1-1numero');

let e1_resposta = document.getElementById('e1-resposta');

let e1_resposta2 = document.getElementById('e1-2resposta');

var valores = [];

var index = 0;

var qualquerValor = 0;

let valor2 = 0;

let valor3 = 0;

let novoValor = 0;

let calculo = 0;


e1_primeiro.addEventListener("click", function () {
    calculaE1();
});

function calculaE1() {

    let valor1 = Number(e1_primeiro.value)

    e1_resposta.innerHTML = ""

    if (valor1 < novoValor){
        calculo = novoValor - valor1
        for(index = 0; index < calculo; index++){
            let valorespop = valores.pop()
        }
    }
    for (index = 0; index < valor1; index++) {
        e1_resposta.innerHTML = e1_resposta.innerHTML + `<input type="number" id="e1-resposta${index}" placeholder="Número ${index + 1}" onkeyup="calculaE1_2()" style="width: 10%; min-width: 90px;" value="1">`
        valor2 = document.getElementById(`e1-resposta${index}`)
        valor3 = Number(valor2.value)
        valores[index] = valor3
    }
    for (index = 0; index < valor1; index++) {
        (function (index) {
            valores[index].addEventListener("keyup", function () {
                calculaE1_2()
            })
        });
    }
    novoValor = valor1;
}

function calculaE1_2() {

    let valor1 = Number(e1_primeiro.value)

    let quantidade100a200 = 0;

    for(index = 0; index < valor1; index++){
        valor2 = document.getElementById(`e1-resposta${index}`)
        valor3 = Number(valor2.value)
        valores[index] = valor3
    }

    for(n of valores){
        if(n >= 100 && n <= 200){
            quantidade100a200++
        } else if (n == 0){
            e1_primeiro.value = 0
            calculaE1()
            quantidade100a200 = 0
        }
    }

    e1_resposta2.innerHTML = `A quantidade de números entre 100 e 200 é igual a ${quantidade100a200}`
}


