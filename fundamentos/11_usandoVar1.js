{
    {
        {
            {
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local1 = 123
    {
        {
            var local2 = 321
        }
    }
    console.log(local1)
    console.log(local2)
    console.log(sera)
}

teste()
// console.log(local1) // Erro pois uma var criada dentro de uma function, tem seu escopo apenas dentro da função