// Modulos Externos
import chalk from "chalk";
import inquirer from "inquirer";

// Modulos internos
import fs from "fs"
import verificaConta from "./verificarConta.mjs";
import operation from "./index.mjs";
import getConta from "./getConta.mjs";

function depositar(){
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
            return depositar()
        }

        inquirer.prompt([
            {
                name:'amount',
                message: 'Quanto você deseja depositar?'
            }
        ])
        .then(resposta => {

            const amount = resposta['amount']

            // Adição do valor
            adicionarValor(accountName,amount)

            operation()

        })
        .catch(err => console.log(err))

    })
    .catch(err => console.log(err))
}

function adicionarValor(accountName,amount){

    const accountData = getConta(accountName)

    if(!amount){
        console.log(
            chalk.bgRed.black.bold('Ocorreu um erro, tente novamente mais tarde!')
        )
        return depositar()
    }

    accountData.balance = parseFloat(accountData.balance) + parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        err => console.log(err)
    )

    console.log(
        chalk.green(`Foi depositado o valor de R$${amount} na sua conta`)
    )
}

export default depositar