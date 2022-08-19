// função pra calcular juros p=valor i=juros ao mês n=quantidade de mêses
const calculoJuros = (p, i, n) => p * Math.pow(1+i, n)

module.exports={
    calculoJuros
}