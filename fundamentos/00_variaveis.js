/* Variáveis

var -> Funciona como uma variável global

let -> Funciona no escopo/bloco onde se está declarando a variável

const -> É uma constante, onde não se pode atribuir um novo elemento para ela, porém se for um objeto, podemos
         alterar valores dos atributos deste objeto.
        OBS: Funciona de maneira similar ao final do Java
        OBS2: Tem o mesmo tipo de escopo que o let
*/

var teste1 = "Oi"
let teste2 = "Hi"
const teste3 = 3

{
    var teste4 = "Hello world"
    let teste5 = "Olá mundo"
    const teste6 = "Legal!"
    console.log(teste1)
    console.log(teste2)
    console.log(teste3)
    console.log(teste4)
    console.log(teste5)
    console.log(teste6)
}

console.log("---------------")
console.log(teste1)
console.log(teste2)
console.log(teste3)
console.log(teste4)
// console.log(teste5) // Gerar erro : teste5 is not defined
// console.log(teste6) // Gerar erro : teste6 is not defined

// teste3 = 5 // Gera erro: Assignment to constant variable. Por estar tentar atribuir outro valor a variável

const ultimoTeste = {
    nome: "Gustavo",
    idade: 26
}

ultimoTeste.idade = 27
console.log(ultimoTeste.idade) // Não gera erro por se tratar de um objeto e estamos alterar um atribuito dentro do objeto e não o objto em si.

// ultimoTeste = {id: 333} // Como aqui eu estou tentando atribuir outro objeto ao const, gera um TypeError