function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // outra maneira de se trabalhar o xor sem ser bitwise
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
    /* Isso é um retorno de um objeto, ele não possui chave valor pois a partir do ES2015 podemos utilizar
    essa notação para não tornar redundante chave e valor quando se utiliza variáveis. exemplo 
    { comprarSorvete: comprarSorvete } no return acima ele já está criando uma chave com o nome da variável
    e o valor é o valor da propria variável */
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))