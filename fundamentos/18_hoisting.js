/* Hoisting é um comportamento padrão do JS de mover declarações para o top
isso acontece quando utilizamos o tipo var */
console.log('a =', a)
var a = 2
console.log('a =', a)

/* 
É a mesma coisa que fazer o código abaixo:
var a
console.log('a =', a)
a = 2
console.log('a =', a)
*/

//Com let não acontece o hoisting
/* console.log('b =', b)
let b = 2
console.log('b =', b) */