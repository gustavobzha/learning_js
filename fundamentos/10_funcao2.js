// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { //note que o arrow substitui a necessidade de utilizar a palavra function
    return a + b
}

console.log(soma(2, 3))

// retorn implícito
const subtracao = (a, b) => a - b
/* perceba que não houve a presença de chaves para a construção do bloco, nesse caso entende-se que a função será
de apenas uma única linha e essa linha será retornável, por isso o return fica implícito */
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!!")