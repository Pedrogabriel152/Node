// Modulos Externos
import chalk from "chalk";
import inquirer from "inquirer";

// Modulos internos
import verificaConta from "./verificarConta.mjs";
import getConta from "./getConta.mjs";
import operation from "./index.mjs";

function consultarSaldo(){
    inquirer.prompt([
        {
            name: 'account',
            message: 'Qual a sua conta?'
        }
    ])
    .then(resposta => {
        const accountName = resposta['account']

        if(verificaConta(accountName)){
            const accountData = getConta(accountName)

            console.log(
                chalk.bgBlue.black.bold(`Seu saldo é de R$${accountData.balance}`)
            )

            operation()

        } else {
            return consultarSaldo()
        }
    })
    .catch(err => console.log(err))
}

export default consultarSaldo