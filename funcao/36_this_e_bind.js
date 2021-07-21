function Pessoa(){
    this.idade = 0
    
    setInterval(function() { 
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000) // função irá disparar a cada um segundo, adicionando 1 a idade e imprimindo valor
    // sem utilizar o bind, o this dentro de SetInterval não estará se referenciado a instância de Pessoa e sim
    // a própria função SetInterval.
}

new Pessoa

/* Outra opção utilizada é driblar a variação de this criando uma constante e acessando essa constante dentro da
função desejada

function Pessoa(){
    this.idade = 0
    
    const self = this // dessa forma self será o this que de fato quero apontar, que será a instancia do objeto
    setInterval(function() { 
        self.idade++
        console.log(self.idade)
    }, 1000) 
    
*/