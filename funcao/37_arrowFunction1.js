let = dobro = function (a) {
    return 2 * a
}

// Vale lembrar que a função Arrow é sempre uma função anônima, ou seja, você precisa amazená-la em uma variável
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implícito, apenas utilizado quando a função só possui uma linha.
console.log(dobro(Math.PI))

let ola = function () { 
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro, mas pode ignorar se quiser.
console.log(ola())