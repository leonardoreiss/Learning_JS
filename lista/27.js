/*
27)	(SWITCH/Escolha) Crie um programa que solicite do usuário um mês qualquer, 
informe quantos dias esse mês possui (28 dias fevereiro)
a.	Usando apenas instruções if..else/se..senao
b.	Usando switch/escolha sem qualquer break/pare (fica como desafio!!!, fazer em casa)
c.	Usando switch/escolha com break/pare
*/

const mes = parseInt(prompt("Digite o numero do mes para saber quantos dias tem: "));

switch (mes)
{
    case 1:
        console.log("31 dias");
        break;
    case 2:
        console.log("28 dias");
        break;
    case 3:
        console.log("31 dias");
        break;
    case 4:
        console.log("30 dias");
        break;
    case 5:
        console.log("31 dias");
        break;
    case 6:
        console.log("30 dias");
        break;
    case 7:
        console.log("31 dias");
        break;
    case 8:
        console.log("31 dias");
        break;
    case 9:
        console.log("30 dias");
        break;
    case 10:
        console.log("31 dias");
        break;
    case 11:
        console.log("30 dias");
        break;
    case 12:
        console.log("31 dias");
        break;
    default:
        console.log("Mes não encontrado!!!");
}