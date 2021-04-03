var bloco1 = [3, 2, 1]
var bloco2 = []
var bloco3 = []
var pinos = 3;
hanoi(pinos, bloco1, bloco2, bloco3)
function hanoi(np, b1, b2, b3){
    if(np == 1){
        b2.push(b1.pop())
        console.log(`Bloco A ${b1}`)
        console.log(`Bloco B ${b2}`)
        console.log(`Bloco C ${b3}`)
        console.log(` `)
    }else {
        hanoi(np -1, b1, b3, b2)
        b2.push(b1.pop())
        console.log(`Bloco A ${b1}`)
        console.log(`Bloco B ${b2}`)
        console.log(`Bloco C ${b3}`)
        console.log(` `)
        hanoi(np -1, b3, b2, b1)
        console.log(`Bloco A ${b1}`)
        console.log(`Bloco B ${b2}`)
        console.log(`Bloco C ${b3}`)
        console.log(` `)
    }
}



























/*var bloco1 = [3, 2, 1];
var bloco2 = [];
var bloco3 = [];
var numero = 3;
console.log(
  `Começo Bloco A ${bloco1}, Começo Bloco B ${bloco2}, Começo Bloco C ${bloco3}`
);
moverJogo(numero, bloco1, bloco2, bloco3);
function moverJogo(n, b1, b2, b3) {
  if (n == 1) {
    b2.push(b1.pop());
    console.log(`Bloco A ${b1}, Bloco B ${b2}, Bloco C ${b3}`);
  } else {
    moverJogo(n - 1, b1, b3, b2);
    b2.push(b1.pop());
    console.log(`Bloco A ${b1}, Bloco B ${b2}, Bloco C ${b3}`);
    moverJogo(n - 1, b3, b2, b1);
    console.log(`Bloco A ${b1}, Bloco B ${b2}, Bloco C ${b3}`);
  }
}
*/