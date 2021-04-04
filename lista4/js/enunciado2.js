var gaveta1 = document.getElementById('e2-0resposta')

var resposta = document.getElementById('e2-resposta')

var inputs = [0]

gaveta1.addEventListener('click', function () {
    criarInput()
})
var auxiliar = 0;

function criarInput() {

    if (inputs[inputs.length - 1] > -1) {
        resposta.appendChild(document.createElement('input')).setAttribute("id", `e2-${inputs.length}resposta`)
        document.getElementById(`e2-${inputs.length}resposta`).setAttribute("value", "-1")
        document.getElementById(`e2-${inputs.length}resposta`).setAttribute("type", "number")
        document.getElementById(`e2-${inputs.length}resposta`).setAttribute("onkeyup", "criarInput()")
        
        auxiliar = document.getElementById(`e2-${inputs.length}resposta`)
        inputs[inputs.length] = parseInt(auxiliar.value)
    }
   
    for (index of inputs) {
        (function (index) {
            valores[index].addEventListener("keyup", function () {
                criarInput()
            })
        });
    }

     
    for (index = 0; index < inputs.length; index++) {
        auxiliar = document.getElementById(`e2-${index}resposta`)
        inputs[index] = parseInt(auxiliar.value)
    }

}