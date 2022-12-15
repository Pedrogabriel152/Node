const chalk = require('chalk')

const nota = 4

if(nota >=6){
    console.log(chalk.green('Parabéns!!! Você foi aprovado!'))

} else {
    console.log(chalk.bgRed.black("Você ficou de recupreção"))
}