// Criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAsterisco(50);

function exibirAsterisco(linhas)
{
    let cout = '*';
    for(let i = 1; i <= linhas; ++i)
    {
        console.log(cout);
        cout = cout + '*';
    }
}