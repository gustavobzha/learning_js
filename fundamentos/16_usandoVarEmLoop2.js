const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

/* Por i ser uma variável global, quando a function é chamada, ele pega o valor final da variável e não no momento
em que a função foi criada */