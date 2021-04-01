//FUNÇÃO CALCULAR ENUNCIADO 2

let base = document.getElementById('e3-1numero')

let altura = document.getElementById('e3-2numero')

base.addEventListener("click", function () {
    calcularE3();
});

altura.addEventListener("click", function () {
    calcularE3();
});


function calcularE3() {
    document.getElementById('e3-resposta').innerText = `${((Number(base.value) * Number(altura.value)) /2 ).toLocaleString('pt-br')}`
}



