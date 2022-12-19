// Modulos Externos
import chalk from "chalk";
import inquirer from "inquirer";

// Modulos internos
import fs from "fs"
import verificaConta from "./verificarConta.mjs";
import operation from "./index.mjs";
import getConta from "./getConta.mjs";

function sacar(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then(resposta => {

        const accountName = resposta['accountName']

        // Verificar se a conta existe

        if(!verificaConta(accountName)){
            return sacar()
        }

        inquirer.prompt([
            {
                name:'amount',
                message: 'Quanto você deseja sacar?'
            }
        ])
        .then(resposta => {

            const amount = resposta['amount']

            // Adição do valor
            retirarValor(accountName,amount)

            operation()

        })
        .catch(err => console.log(err))

    })
    .catch(err => console.log(err))
}

function retirarValor(accountName,amount){

    const accountData = getConta(accountName)

    if(!amount){
        console.log(
            chalk.bgRed.black.bold('Ocorreu um erro, tente novamente mais tarde!')
        )
        return sacar()
    }

    if(parseFloat(accountData.balance) < parseFloat(amount)){
        console.log(
            chalk.bgRed.black.bold('Saldo insuficiente!')
        )
        console.log(
            chalk.bgBlue.black.bold(`saldo dispomivel é de R$${accountData.balance}`)
        )

        return
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        err => console.log(err)
    )

    console.log(
        chalk.green(`Foi retirado o valor de R$${amount} na sua conta`)
    )
}

export default sacar