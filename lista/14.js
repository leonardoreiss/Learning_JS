/*
Faça um programa que solicite do usuário seu salário, 
e aplique um aumento de 10 % para esse salário somente
se for < 2000. Ao final do programa apresente o valor do salário 
antigo e do novo salário.
*/

let sal = parseInt(prompt("Salario: "));

if(sal < 2000) sal = sal + ((sal * 10) / 100);

console.log("seu salario eh de: R$" + sal +",00");