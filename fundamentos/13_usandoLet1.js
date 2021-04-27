var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
    /* Como estamos em um escopo menor, o JS procura se existe uma variável numero com o escopo menor,
    ou seja, em escopos menores o let tem a preferência, caso não seja encontrado uma variável numero no
    no escopo menor, ele irá procurar no escopo maior*/
}
console.log('fora =', numero)


let numero1 = 10
{
    let numero1 = 20
    console.log('dentro =', numero1)
    /* não há problema também em existir 2 let com o mesmo nome se o escopo for diferente, ele funcionaria
    da mesma forma como foi citado com o var */
}
console.log('fora =', numero1)


let numero2 = 100
{
    let numero3 = 200
    console.log('dentro =', numero3)
    console.log('dentro =', numero2) // lembrando que o let fora do bloco também é válido dentro do bloco
}