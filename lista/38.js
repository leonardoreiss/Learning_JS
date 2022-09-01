/*
38)	(STRING) Receba do usuário 2 números com 3 dígitos 
cada uma, não permita que o programa receba algo diferente 
disso. Crie uma variável String que recebera os número intercalados. EX:
N1 = 123
N2 = 456
T = 142536
*/

const n1 = prompt("N1: ");
const n2 = prompt("N2: ");

const str1 = n1.split("");
const str2 = n2.split("");

if (str1.length == 3 && str2.length == 3)
{
    alert(str1[0] + str2[0] + str1[1] + str2[1] + str1[2] + str2[2]);
}
else
{
    alert("Escreva numeros apenas de 3 digitos! :(");
}



