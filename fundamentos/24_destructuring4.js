function rand([min = 0, max = 1000]) {
    /* a linha abaixo está criando um array na ordem [max, min] a partir do dado extraído do array
     fornecido à função no qual o valor mínimo era maior que o valor máximo */
    if (min > max) [min, max] = [max, min] 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) // Passando apenas valor mínimo
console.log(rand([, 10])) // Passando apenas valor máximo
console.log(rand([])) // Passando array vazio
// console.log(rand()) // Gera erro por estar passando um undefined