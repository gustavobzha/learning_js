/* O conceito de array é bem parecido com o de Python, mudando 
apenas como as funções são chamadas para determinadas tarefas */

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // Adiciona elementos dentro do array
console.log(valores)

console.log(valores.pop()) // Retorna o ultimo elemento do array e o Deleta  
delete valores[0] // Deleta um elemento do array em qualquer posição, necessitando apenas colocar o valor do seu index
console.log(valores) 

console.log(typeof valores) // Vê o tipo da variável valores