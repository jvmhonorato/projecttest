// função pra calcular juros
const calculoJuros = (p, i, n) => p * Math.pow(1+i, n)

module.exports={
    calculoJuros
}