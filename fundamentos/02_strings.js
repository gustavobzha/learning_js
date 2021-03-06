const escola = "Cod3ra3"

console.log(escola.charAt(4)) // Encontra a letra do index indicado 
console.log(escola.charAt(5)) // Encontra a letra do index indicado
console.log(escola.charCodeAt(5)) // Imprime o Valor ASCII da caracter no index indicado
console.log(escola.indexOf('3')) // Faz a busca pelo caracter indicado e retorna o valor do index

console.log(escola.substring(1)) // Faz o slicing da String a partir do index indicado
console.log(escola.substring(0, 3)) // Faz o slicing de 0 ao 2, onde 3 é ponto de parada e não é incluído no print

console.log('Escola '.concat(escola).concat("!")) // Concatena Strings
console.log('Escola ' + (escola) + ("!")) // Concatena Strings
/* no lugar do concat pode-se utilizar o "+" como é visto acima. Por esse motivo o sinal de adição é o
único onde não se consegue fazer operações matemáticas usando números em formato de string com números
em formato de numeral, como não faz sentido divir ou subtrair strings o JS converte a string para número, mas
no caso da adição a concateção de strings tem prioridade */
console.log(escola.replace(3, 'e')) // Faz o replace do primeiro número 3 encontrado pelo 'e'.
console.log(escola.replace(/\w/g, 'e')) // Faz replace de todas as letra ou números pelo 'e' através do Regex

console.log("Ana,Maria,Pedro".split(',')) // Transforma uma string em Array assim como em Python.