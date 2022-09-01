/* Solicitar do usuário dois números e uma 
operação (+,-,*,/), apresentar o resultado da 
operação escolhida utilizando os dois números digitados.
*/

const n1 = parseInt(prompt("Numero 1: "));
const n2 = parseInt(prompt("Numero 2: "));

const op = prompt("Operação: ");

switch(op)
{
    case '+':
        alert(n1 + n2);
        break;
    case '-':
        alert(n1 - n2);
        break;
    case '*':
        alert(n1 * n2);
        break;
    case '/':
        alert(n1 / n2);
        break;
    default:
        alert("Operador desconhecido");
}
