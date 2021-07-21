const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// o forEach pode enviar até 3 parâmetros, sendo primeiro: um elemento do array, segundo: o index do qual esse elemento pertence, terceiro: o array completo.
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))