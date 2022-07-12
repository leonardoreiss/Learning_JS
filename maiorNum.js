function maior(a, b)
{
    if(a == b)
        return 'Numeros iguais';
    return a > b ? a : b;
}

let a = 11;
let b = 10;

console.log(maior(a, b));