/*37)	(STRING) Solicitar do usuário dois números em variáveis 
inteiras. Armazenas esses dois números no formato N1-N2 em uma 
variável do tipo String. Apresentar a variável String. EX
N1 = 123
N2 = 4
String= 123-4
 */

const n1 = prompt("N1: ");
const n2 = prompt("N2: ");

const str = (n1 + "-" + n2);

alert(str);