
let iCodigo = document.getElementById(`codigoProduto`);

let erro = document.getElementById(`erroCodigo`);

let quantidadeProduto = document.getElementById(`quantidade`);

let campoResposta = document.getElementById(`mostrarLista`);

let valorCompra = document.getElementById(`totalCompra`);

let calcularValor = 0;

const valorProdutos = [
    {
        nome: 'ABCD',
        valor: 5.30
    },
    {
        nome: 'XYPK',
        valor: 6
    },
    {
        nome: 'KLMP',
        valor: 3.20
    },
    {
        nome: 'QRST',
        valor: 2.50
    }
];

let carrinho = [];


function adicionarItem() {

    calcularValor = 0;
    erro.innerHTML = "";
    campoResposta.innerHTML = "";

    let produto = (iCodigo.value).toUpperCase();
    let quantidade = Number(quantidadeProduto.value);

    for (n in valorProdutos) {
        if (produto === valorProdutos[n].nome) {

            carrinho.push({ nome: produto, quantidadeP: quantidade, valorTotal: (valorProdutos[n].valor * quantidade) });
            console.log(carrinho);
        } else if (produto !== valorProdutos[0].nome && produto !== valorProdutos[1].nome && produto !== valorProdutos[2].nome && produto !== valorProdutos[3].nome) {
            erro.innerHTML = `Por favor, digite um código válido`
        };
    }

    for (n in carrinho) {
        campoResposta.appendChild(document.createElement('p')).setAttribute('id', `prodruto${n}`);


        document.getElementById(`prodruto${n}`).innerHTML = `Você comprou ${carrinho[n].quantidadeP}, ${carrinho[n].nome}, o valor total do produto é igual a: ${carrinho[n].valorTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    
    };

    for (n in carrinho) {
        calcularValor = calcularValor + carrinho[n].valorTotal;
    };

    valorCompra.innerHTML = calcularValor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function removerItem() {

    calcularValor = 0;

    campoResposta.innerHTML = "";

    carrinho.pop()

    console.log(`teste`);

    for (n in carrinho) {

        campoResposta.appendChild(document.createElement('p')).setAttribute('id', `prodruto${n}`);
        document.getElementById(`prodruto${n}`).innerHTML =
            `Você comprou ${carrinho[n].quantidadeP} ${carrinho[n].nome}, o valor total do produto é igual a: 
        ${carrinho[n].valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
    };


    for (n in carrinho) {
        calcularValor = calcularValor + carrinho[n].valorTotal;
    };

    valorCompra.innerHTML = calcularValor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}


function limparlista() {

    let tamanho = carrinho.length

    for(i = 0; i < tamanho; i++) {
        carrinho.pop()
    }
    calcularValor = 0;
    erro.innerHTML = "";
    campoResposta.innerHTML = "";
    valorCompra.innerHTML = "R$0,00"
}