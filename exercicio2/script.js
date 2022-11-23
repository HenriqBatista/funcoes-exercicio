// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

// d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS. 
////////////////////////////////////////////////////////////////

let num1 = 18  /*prompt ("insira um numero")*/
let num2 = 20 /*prompt ("insira agora um outro numero")*/

function Exercício1A (num1,num2){
    const num3 = Number (num1+num2)
    console.log(num3)


}
Exercício1A (num1,num2)
//////////////////////////////////////////////////////////////

const Exercício1B =(num4,num5) =>{ 
    const maiorIgual = num4 >= num5
    console.log (maiorIgual)

}
Exercício1B (prompt("insira um numero"),prompt("Insira outro numero"))

///////////////////////////////////////////////////////////////

function Exercício1C (num6){
const parImpar = (num6 %2 ===0)
console.log(parImpar)

}
Exercício1C (prompt("Insira mais um numero"))

/////////////////////////////////////////////////////////////////

function Exercício1D (salario){
    let inss = (salario - (salario*0.10))
    console.log (`o valor do seu salario fora o desconto do INSS é ${inss}`)

}

Exercício1D (prompt("Me diga agora qual é o valor do seu salario atual"))