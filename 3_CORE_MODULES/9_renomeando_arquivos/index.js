const fs = require('fs');

const arqAntigo ='arquivo.txt'
const arqNovo = 'arquivo2.txt'

fs.rename(arqAntigo,arqNovo, err => {

    if(err){
        console.log(err);
        return
    }

    console.log(`Arquivo ${arqAntigo} foi renomeado com sucesso para ${arqNovo}!!!`)

})