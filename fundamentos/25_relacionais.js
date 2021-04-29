console.log('01)', '1' == 1) // (lê-se como igual) Comparando valores
console.log('02)', '1' === 1) // (lê-se como estritamente igual) Compara valores e tipos
console.log('03)', '3' != 1) // (diferente)
console.log('04)', '3' !== 1) // (estritamente diferente)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // como está comparando objetos(no caso, endereços de memória) tanto '==' quanto '===' darão false.
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2)

console.log('12)', undefined == null)
console.log('13)', undefined === null)