//FUNÇÃO CALCULAR ENUNCIADO 1

let e3_primeiro = document.getElementById('e3-1numero');

let e3_segundo = document.getElementById('e3-2numero');

let e3_resposta = document.getElementById('e3-resposta')


e3_primeiro.addEventListener("click", function () {
    calculaE3();
});

e3_segundo.addEventListener("click", function () {
    calculaE3();
});

function calculaE3() {

    e3_resposta.innerHTML = ""

    for (let index = 0; index <= Number(e3_segundo.value); index++) {
        e3_resposta.innerHTML = `${e3_resposta.innerHTML + "</br>" + `${Number(e3_primeiro.value)} * ${index} = ${(Number(e3_primeiro.value) * index)}`} `
    }

}

