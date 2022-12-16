const fs = require('fs')

console.log("Início")

fs.writeFile("arquivo.txt","oi", err =>{
    setTimeout(() => {
        console.log("Arquivo criado!")
    }, 2000)
})

console.log('Fim')