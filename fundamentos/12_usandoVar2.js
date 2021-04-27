var numero = 1
{
    var numero = 2 // uma variável do tipo var não gera erro ao ser declarada mais de uma vez.
    console.log('dentro =', numero)
}
console.log('fora =', numero)