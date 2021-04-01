//FUNÇÃO CALCULAR ENUNCIADO 5

let e5_primeiro = document.getElementById('e5-1numero')

let e5_segundo = document.getElementById('e5-2numero')

let e5_terceiro = document.getElementById('e5-3numero')

e5_primeiro.addEventListener("click", function () {
    calcularE5();
});

e5_segundo.addEventListener("click", function () {
    calcularE5();
});

e5_terceiro.addEventListener("click", function () {
    calcularE5();
});


function calcularE5() {

    let calcular = (Number(e5_primeiro.value) + Number(e5_segundo.value) + Number(e5_terceiro.value)) / 3;

    document.getElementById('e5-resposta').innerHTML = `${calcular.toFixed(0)}`

}
