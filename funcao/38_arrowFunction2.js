function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// Como a função foi escrita dentro da função Pessoa, o arrow function assegura que o this será dessa função
// Isso é chamado de contexto léxico 