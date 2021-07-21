// IIFE -> Immediately Invoked Function Expression

/* Uma de suas principais funções é quando estamos utilizando o browser e queremos fugir do escopo global
Quando criamos uma função auto invocada, quando nosso script é lido o treco de código que está dentro da função
vai será executado só que tudo que criarmos dentro da função será de escopo local da função e não escopo global
e isso pode ajudar a evitar manipularmos coisas diretamento no escopo global do browser. 

Por quê evitar?

Se algo é compartilhado com toda a sua aplicação, principalmente algo que é variável, muitos códigos podem manipular
aquele valor variável e gerar bugs inesperados na sua aplicação */



(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()