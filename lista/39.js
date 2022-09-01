/*
39)	(STRING) Crie um programa em C que solicite do usuário o nome, 
idade e sexo, após cada conjunto de dados solicitado, pergunte para o 
usuário se ele quer digitar mais (use while), se sim repita a operação, 
se não, apresente quantas pessoas são do sexo masculino e quantas pessoas 
são do sexo feminino.
OBS: validar o sexo para aceitar “MASC” ou “FEM” (use do..while)
*/

function cont(sexo)
{
    if (sexo == 'FEM' || sexo == 'fem') fem++;
    else if (sexo == 'MASC' || sexo == 'masc') masc++;
}

let nome, idade, sexo;
let fem = 0;
let masc = 0;
let resp = 'sim';

while(resp == 'sim' || resp == 'SIM' || resp == 'Sim')
{
    nome = prompt("Qual é o seu nome ? ");
    idade = prompt("Qual é a sua idade? ");
    sexo = prompt("Qual é o seu sexo? ")
    cont(sexo);

    resp = prompt("Deseja adicionar mais uma pessoa ? ")
}

alert('Masculino: ' + masc + ' e pessoas do sexo feminino: ' + fem);
