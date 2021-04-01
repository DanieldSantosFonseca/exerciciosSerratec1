//FUNÇÃO CALCULAR ENUNCIADO 1

let e2_primeiro = document.getElementById('e2-1numero');

let e2_segundo = document.getElementById('e2-2numero');


e2_primeiro.addEventListener("click", function () {
    calculaE2();
});

e2_segundo.addEventListener("click", function () {
    calculaE2();
});

function calculaE2() {

    let valorTotalBruto = Number(e2_primeiro.value) * 10 + Number(e2_segundo.value) * 15;
    
    document.getElementById('e2-resposta').innerHTML = `${valorTotalBruto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
}



