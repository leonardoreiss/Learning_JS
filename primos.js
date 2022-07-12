// Criar uma função para mostrar os números primos com um numero limite 

testarNumMax(15);

function testarNumMax(limite)
{
    for(let num = 2; num <= limite; num++) // Pra rodar até o n° limite que requerimos
    {
       ehprimo(num);
    }
}
function ehprimo(num)
{
    for(let h = 2; h < num; h++) //Começa do dois pra pular direto pra verdadeiro
    {  
        if(num % h === 0) //Se o numero for divisivel por outro que não seja nem por ele nem por 1 (por isso o h < num no for)
        {
            return ''; //retorna vazio
        }    
    }
    return console.log(num);
}