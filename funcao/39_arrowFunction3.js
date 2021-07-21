let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // mudando o contexto para o objeto obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // global é o contexto global, equivale ao window do browser
comparaComThisArrow(module.exports) // module.exports é o módulo onde o node está sendo executado

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
// uma ArrowFunction não muda de contexto mesmo utilizando bind!
// o this de uma função Arrow é um this associado ao contexto no qual a função foi escrita