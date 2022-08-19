const files = require('../src/files');

const expect = require('../node_modules/chai').expect
const fs = require('fs');
const sinon = require('../node_modules/sinon');


describe('reading directory', () => {
    it('reads a directory', () => {

        //add sinon.stub primeiro parãmetro é o modulo:fs, o segundo parãmetro é a função: readdir, depois se ele identificar o readdir . chamar metodo fake com o callsFake onde o primeiro parâmetro é path e o segundo e o retorno: callback
        sinon.stub(fs, 'readdir').callsFake((path, cb)=> {
            //retornar camimho null e somente o arquivo declarado
            cb(null, ['file1.txt'])
        })
        const path ='./'
        return files.readdir(path).then(list => {
            console.log(list)
            expect(list.length).to.equal(1)
            //expect que na primeira chamda (0) o primeiro argumento [0] seja igual a path: o caminho
            expect(fs.readdir.getCall(0).args[0]).to.equal(path)

        })
    })
})
