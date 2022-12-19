// Modulos Externos
import chalk from "chalk";
import inquirer from "inquirer";
import consultarSaldo from "./consultarSaldo.mjs";

// Modulos internos
import criarConta from "./criarConta.mjs";
import depositar from "./depositar.mjs";
import sacar from "./sacar.mjs";

operation()

function operation(){

    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        },
    ])
    .then(resposta => {

        const action = resposta['action']
        console.log(action)

        if(action === 'Criar conta'){
            criarConta()

        } else if(action === 'Consultar saldo'){
            consultarSaldo()

        } else if(action === 'Depositar'){

            depositar()

        } else if(action === 'Sacar'){

            sacar()

        } else if(action === 'Sair'){
            console.log(
                chalk.bgBlue.black('Obrigadoo por usar o Account')
            )
            process.exit()
        }
    })
    .catch(err => console.log(err))

}

export default operation