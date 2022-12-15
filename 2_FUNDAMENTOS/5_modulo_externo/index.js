const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']
const idade = args['idade']
const empresa = args['empresa']

console.log(nome)
console.log(profissao)

console.log(`${nome} tem ${idade} anos e trabalha como ${profissao} na empresa ${empresa}`)