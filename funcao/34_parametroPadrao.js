// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1()) // vai receber undefined  para cada argumento e retornar 1 para cada argumento. Resultado = 3
console.log(soma1(3)) // o A vai receber valor 3 e o resto valor 1 por receberem undefined da função. Resutado = 5
console.log(soma1(1, 2, 3)) // resultado = 6
console.log(soma1(0, 0, 0)) // como estamos utilizando um operador booleano vai entender o 0 como boolean na comparação e retornará 1 para cada argumento. Resultado = 3

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se "a" for diferente de undefined, a = a, se não a = 1
    b = 1 in arguments ? b : 1 // existe o index 1 em arguments? se sim b = b, se não, b = 1
    c = isNaN(c) ? 1 : c // "c" não é um número? se sim c = 1, se não c = c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))