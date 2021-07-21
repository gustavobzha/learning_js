const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // se tirarmos o this resultará em erro falando que não conhece a variável saudacao
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Aqui, saudacao estará apontando para um "this" diferente que não é o objeto pessoa e esse objeto
// que esta sendo apontado a partir da chamada da funcao, não tem saudacao dentro dele e o resultado deu undefined
// Aqui temos um conflito entre paradigmas funcional e orientação a objetos
// como estamos armazenando uma função em uma variável estamos mudando o contexto e por isso gerou-se um problema no this

// O que podemos fazer é utilizar o bind! nele você passa o objeto no qual quer se seja resolvido o "this"
const falarDePessoa = pessoa.falar.bind(pessoa)
// Com isso, o this sempre seral "resolvido" dentro do objeto pessoa.
falarDePessoa()

// Uma arrow function também "trava" o valor do this para o objeto em questão
const falar2 = () => pessoa.falar()
falar2()