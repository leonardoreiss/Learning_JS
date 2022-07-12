//Criar uma função somar que retorna a
//soma de todos os múltiplos de 3 e 5

somar(10);

function somar(limite)
{
    let result = 0;

    for(let i = 0; i <= limite; i++)
    {
        if(i % 3 == 0)
        {
            result = result + i;
        }else if(i % 5 == 0)
        {
            result = result + i;
        }
    }
    return console.log(result);
}