/* Quando definimos a função pela forma "function declaration, o interpratador do JavaScript primeiro lê as funções
carrega essas funções preparadas e depois começa a executar seu código, então isso significa que na linha 4
o interpretador já tem todas as funções do tipo function declaration declaradas previamente, por isso conseguimos executá-las*/
console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
// a única vantagem de se usar a named function é em caso de debugar o código ou estiver verificando o stack trace
// a o nome da função irá aparecer e isso pode facilitar a encontrar o problema, mas mesmo assim a named function é pouco utilizada

console.log(mult(3, 4))