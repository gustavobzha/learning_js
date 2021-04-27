// Em JS objetos são grupos de chave valor, ou seja ( são os maps de Java ou dict do Python)

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos (chaves) com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preço: 79.90
}

console.log(prod2)

/* As chaves devem ser únicas para seu escopo, ou seja, não pode haver repetição de nomes
a menos que seja uma chave como nome "obj" por exemplo e valor dessa chave seja outro 
objeto e nele pode haver uma chave com nome "obj" sem problemas */