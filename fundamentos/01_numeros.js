console.log(7 / 0)
console.log("10" / 2)
console.log("10,2" / 2) // Isso gera um erro chama "NaN" (Not a Number)
console.log("10.2" / 2)
console.log("Show!" * 2)  // Isso gera um erro chama "NaN" (Not a Number) , ao contrário de outras linguagens que iria duplicar a string
// console.log(10.toString()) não se pode converter um número diretamente para string
console.log((10).toString()) // mas utilizando parênteses podemos utilizar desse artifício sem problemas
console.log((10.345).toFixed(2)) //printando duas casas decimais após a vírgula

let x = 2.45678
console.log(x)
let y = x.toString() // Convertendo número em string
console.log(typeof y)
console.log("Hello" + x.toString())
console.log(x.toString(2)) // Convertendo número em binário

let a = 1
let b = 2.5 // tanto a quanto b são variáveis do tipo number
console.log(typeof a + " e " + typeof b)
console.log(Number.isInteger(a))
console.log(Number.isInteger(b)) // porém, b não é um inteiro
console.log(Number.isInteger(1.0)) // entretando, um número com casa decimal mas que seja zero, também é considerado um inteiro


