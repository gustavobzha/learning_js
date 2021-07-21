function soma () {
    let soma = 0

    if (arguments.length == 0) console.log("Não recebeu argumentos")

    for (i in arguments) { // é um recurso que verifica quantos argumentos  foram passados para a função, e esses argumentos são tratados como um array
        console.log(`index: ${i}`)
        console.log(`valor: ${arguments[i]}`)
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))