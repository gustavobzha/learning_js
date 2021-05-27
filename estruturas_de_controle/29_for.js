/* O for possui dois tipos de estruturas, uma igual ao C e Java para executar comandos
uma quantidade determinada de vezes e uma para percorrer Arrays e Objetos que é parecida com o Python  */

for (let i = 0; i < 10; i++){
    console.log(i)
}

const array = [8.1, 8.2, 8.3, 8.4, 8.5]

//Percorrendo index de um array
for (let i in array){
    console.log(i, array[i])
}
/* Note que no segundo console log o i não é o elemento dentro do array assim como em python, mas sim o index
desse elemento */


const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}


//Percorrendo atributos de um objeto 
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

