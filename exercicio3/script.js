// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

////////////////////////////////////////////////////
let num1 = Number (prompt("insira um numero"))
let num2 = Number (prompt("Insira mais um numero"))
let mais = num1+num2
let menos = num1-num2
let vezes = num1*num2
let dividido = num1/num2

function soma (num1,num2){
    let mais = num1+num2
    console.log(mais)
    return mais
}
soma (num1,num2)


function subtração (num1,num2){
    let menos = num1-num2
    console.log(menos)
    return menos
}
subtração (num1,num2)

function multiplicacao (num1,num2){
    let vezes = num1*num2
    console.log(vezes)
    return vezes
}
multiplicacao (num1,num2)

function divisao(num1,num2){
    let dividido = num1/num2
    console.log(dividido)
    return dividido
}
divisao (num1,num2)

console.log(`O resultado da soma de ${num1} mais ${num2} é ${mais}\n
O resultado da subtraçao de ${num1} menos ${num2} é ${menos}\n
O resultado da multiplicacao de ${num1} vezes ${num2} é ${vezes}\n 
O resultado da divisao de ${num1} pelo ${num2} é ${dividido}`)