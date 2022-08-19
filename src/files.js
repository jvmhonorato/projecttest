const fs = require('fs');

//função readdir onde path será o caminho que sera chamado
const readdir = (path) => {

    // retorna uma promise que é uma função onde o primeiro parâmetro resolve roda a função e o segundo reject para a função 
    return new Promise((resolve, reject) => {

        //o callback onde o primeiro parâmetro identifica o caminho e o segundo parâmetro  é um arrow function onde eu conecto err ao reject se ele não conseguir rodar e list ao resolve se ele conseguir rodar em uma condicinal 
        fs.readdir(path, (err, list)=> {
            if(err){
                reject(err)
            }else{
                resolve(list)
            }
        })

    })
}

module.exports ={
    readdir
}