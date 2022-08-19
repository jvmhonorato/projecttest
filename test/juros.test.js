const juros = require('../src/juros');
const expect = require('../node_modules/chai').expect


// describe pode reerber varias funções
describe('fees modules', ()=> {
    it('fees compound', ()=> {
        //estancia o caminho da  chamada da função atribuindo valores
        const test1010 = juros.calculoJuros(1000, 0.01, 1)
        //expectativa tem que ser igual o resultado declarado 
        expect(test1010).to.equal(1010)
    })
})