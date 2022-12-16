const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name:'nome',
    message:'Qual seu nome?'
},{
    name:'idade',
    message:'Qual sua idade?'
}])
.then((answers) => {
    if(!answers.nome || !answers.idade){
        throw new Error("O nome e a idade são  obrigatórios!")
    }
    console.log(chalk.bgYellow.black(`O seu nome é: ${answers.nome} e tem ${answers.idade} anos`))
})
.catch(err => {
    console.log(`Erro: ${err}`)
})