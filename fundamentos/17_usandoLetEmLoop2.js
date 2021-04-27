const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

/* Isso vem do conceito de Clojure, uma função JS é um Clojure, em palavras simples por enquanto quer dizer
que uma função ele tem conciencia do local que ele foi definida, dessa forma ela grava o valor da i no momento
em que a função foi criada dentro do array funcs */