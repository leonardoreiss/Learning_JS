//Criar um método para ler propriedades de um objeto e 
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'kevin', 
    personagem : 'Capitão America',
    titulo2 : 'Homem Aranha Longe de casa',
    ano2 : 2017,
    diretor2 : 'Sam Reimy',
    personagem2 : 'Abutre'
}

exibirpropriedades(filme);

function exibirpropriedades(obj)
{
    for(let key in obj)
    {
        if (typeof(obj[key]) === "string")
            console.log(key, obj[key]);
    }
}