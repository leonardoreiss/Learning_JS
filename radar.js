//velocidade máxima de até 70
//a cada 5km acima do limite você ganha 1 ponto
//Math.floor()
//caso pontos maior que 12 -> "Carteira suspendida"

console.log (verificaVelocidade(130));

function verificaVelocidade(velocidade)
{
    if(velocidade <= 70)
        return 'ok';
    
    const pontos = Math.floor ((velocidade - 70) / 5); //M maiusculo no math

    if (pontos >= 12)
        return 'Carteira suspendida';
    else
        return pontos;
}