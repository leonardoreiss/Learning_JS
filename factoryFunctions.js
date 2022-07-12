const celular  = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function() {
        console.log("fazendo Ligação...")
    }  
}

//Factory Functions - Função de fabrica

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria)
{
    // versão Completa
    /*
    return {
        marcaCelular : 'ASUS',
        tamanhoTela : {
            vertical : 155,
            horizontal : 75
        },
        capacidadeBateria : 5000,
        ligar : function() {
            console.log("fazendo Ligação...")
        }  
    }
    */
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("fazendo Ligação...")
        }  
    }
}

const celular1 = criarCelular('Samsung', 5.5, 5000);
console.log(celular1);

//Neste caso o constructorFunction cria a partir do NEW
//Já o factoryFunction você cria direto da função