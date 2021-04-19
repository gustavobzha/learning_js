console.log(7 / 0)
console.log("10" / 2)
console.log("10,2" / 2) // Isso gera um erro chama "NaN" (Not a Number)
console.log("10.2" / 2)
console.log("Show!" * 2)  // Isso gera um erro chama "NaN" (Not a Number) , ao contrário de outras linguagens que iria duplicar a string
// console.log(10.toString()) não se pode converter um número diretamente para string
console.log((10).toString()) // mas utilizando parênteses podemos utilizar desse artifício sem problemas
console.log((10.345).toFixed(2))

