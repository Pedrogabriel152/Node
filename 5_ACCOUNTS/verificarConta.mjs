// Modulos Externos
import chalk from "chalk";
import inquirer from "inquirer";

// Modulos internos
import fs from "fs"

function verificaConta(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(
            chalk.bgRed.black.bold('Esta conta não existe, escolha outro nome!')
        )
        return false
    }
    return true
}

export default verificaConta