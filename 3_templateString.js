const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'  
const template = `
    Olá
    ${nome}!` //  umas das funcionalidades da Template String é reconhecer quebra de linha e concatenação
console.log(concatenacao,template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`) // Ela também interpreta expressoes matemáticas. OBS: note que a template se inicia com crase e não apóstrofo ou aspas como a string

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) // Template String também pode receber funções!