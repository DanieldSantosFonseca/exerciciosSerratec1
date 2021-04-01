//FUNÇÃO CALCULAR ENUNCIADO 2

let a = document.getElementById('e2-1numero')

let b = document.getElementById('e2-2numero')

a.addEventListener("click", function () {
    calcularE2();
});

b.addEventListener("click", function () {
    calcularE2();
});


function calcularE2() {
    document.getElementById('e2-resposta').innerText = `${(Number(a.value) + Number(b.value)).toLocaleString('pt-br')}`
}



