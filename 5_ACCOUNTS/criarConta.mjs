// Modulos Externos
import chalk from "chalk";
import inquirer from "inquirer";

// Modulos internos
import fs from "fs"
import operation from "./index.mjs";

// Criar uma conta

function criarConta(){
    console.log(chalk.bgGreen.black('Parabéns por escokher o nosso Banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    bildConta()
}

function bildConta(){

    inquirer.prompt([
        {
            name:'accountName',
            message:'Digite o nome da sua conta:'
        }
    ])
    .then( resposta => {
        const accountName = resposta['accountName']

        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(
                chalk.bgRed.black('Esta conta já existe, escolha outro nome')
            )
            bildConta()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`,
                        '{"balance":0}',  
                        err => console.log(err))


        console.log(
            chalk.green('Parabéns, a sua conta foi criada!')
        )
        operation()
    })
    .catch(err => console.log(err))

}

export default criarConta;