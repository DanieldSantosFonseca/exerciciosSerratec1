var e2_input = document.getElementById('e2-0resposta')
var resposta = document.getElementById('e2-resposta')
var resposta2 = document.getElementById('e2-1resposta')
var inputs = [0]
const atributos = {
    value: `-1`,
    type: `number`,
    onkeyup: `criarInput()`,
    style: `width: 10%; min-width: 90px;`
}
var auxiliar = 0;
var inputspop = 0;
var maior = 0;

function criarInput() {
    maior = -1;
    

    for (index in inputs) {
        auxiliar = document.getElementById(`e2-${index}resposta`)
        inputs[index] = parseInt(auxiliar.value)
        if(inputs[index] < -1){
            inputs[index] = -1
            auxiliar.value = -1
        }
    }

    if (inputs[inputs.length - 1] > -1) {
        resposta.appendChild(document.createElement('input')).setAttribute("id", `e2-${inputs.length}resposta`)
        auxiliar = document.getElementById(`e2-${inputs.length}resposta`)
        for (index in atributos) {
            auxiliar.setAttribute(index, atributos[index]);
        }
        inputs[inputs.length] = parseInt(auxiliar.value)
    }

    for(index = 0; index < (inputs.length -2); index++){
        if(inputs[index] < 0){
            auxiliar = inputs.length - index -1
            for(i = 0; i < auxiliar; i++){
                resposta.removeChild(resposta.lastChild)
                inputspop = inputs.pop()
                
            }
        }
    }

    for(index in inputs){
        if(inputs[index] > maior){
            maior = inputs[index]
        }
    }

    resposta2.innerHTML = `O maior número digitado é o: ${maior}`

}