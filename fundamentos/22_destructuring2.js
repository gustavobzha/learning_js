// note que a sintaxe de um destructuring para array são os colchetes [], diferente da sintaxe para objetos que são chaves {}
const [a] = [10] // Aqui estamos usando destructuring para definir valores e não extrair.
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)