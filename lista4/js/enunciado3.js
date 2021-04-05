var e3_input = document.getElementById(`e3-numero`)

var e3_resposta = document.getElementById(`e3-resposta`)

var e3_quantidade = 0;

var e3_calcular = 0;


function calcularE3() {

    e3_resposta.innerHTML = ""

    e3_quantidade = parseInt(e3_input.value)

    e3_calcular = e3_quantidade

    e3_resposta.innerHTML = `${e3_quantidade}! = `

    for (var index = e3_quantidade; index > 1; index--) {
        e3_resposta.appendChild(document.createTextNode(`${index} X `))
        e3_calcular = (e3_calcular) * (index -1)

    }

    e3_resposta.appendChild(document.createTextNode(`1 = ${e3_calcular}`))
}