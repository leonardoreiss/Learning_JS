/*Ler dois valores numéricos inteiros e apresentar 
o resultado da diferença do maior valor pelo menor valor. */

let n1 = parseInt(prompt("numero 1: "))
let n2 = parseInt(prompt("numero 2: "))

if (n1 > n2) 
{
    console.log(n1 - n2);
}
else if(n2 > n1)
{
    console.log(n2 - n1);
}
else
{
    console.log("os numeros são iguais");
}
