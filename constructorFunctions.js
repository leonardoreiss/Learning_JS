/*
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria)
{
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("fazendo Ligação...")
        }  
    }
}
*/ //Exemplo anterior 


//Pascal Case - UmDoisTres
function Celular(marcaCelular, tamanhoTela,capacidadeBateria)
{
    this.marcaCelular = marcaCelular, //This referencia o objeto 
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() 
    {
        console.log("Fazendo ligação...");
    }
}//Não tem return

const celular = new Celular('asus',5.5,5000);
console.log(celular)

//Neste caso o constructorFunction cria a partir do NEW
//Já o factoryFunction você cria direto da função
