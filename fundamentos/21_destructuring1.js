// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // extrai do objeto pessoa os atributos nome e idade, criando uma const para cada
console.log(nome, idade)
console.log(pessoa)

const { nome: n, idade: i } = pessoa // Cria uma variável "n" a partir do nome extraído do objeto, o mesmo vale par ai e idade
console.log(n, i)

// Caso o atribuito que você está pedindo para ser extraído não existe, é retornado undefined
const { sobrenome, bemHumorada = true } = pessoa // podemos definir também valores padrão caso ocorra "undefined"
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // extraindo atributos de um objeto que está dentro de outro objeto
console.log(logradouro, numero, cep)

// Aqui retornará erro pois conta é "undefined" e não tem como existir um objeto dentro de um "undefined"
/* const { conta: { ag, num } } = pessoa
console.log(ag, num) */