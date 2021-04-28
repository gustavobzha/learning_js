/* No parâmetro da função abaixo não que o que está entre chaves é um objeto e sim que a função irá receber um objeto e que
através do destructuring ele irá extrair os valores min e máximo, caso não haja, os valores de mínimo e máximo terão os 
padrões determinado pela função (0 e 1000) */
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 })) // Passando objeto com valor min 955 direto na função
console.log(rand({})) // Passando um objeto vazio
// console.log(rand()) // Passando a função vazia irá gerar TypeError pois é necessário receber um objeto. 