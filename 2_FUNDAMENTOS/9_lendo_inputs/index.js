const readlinne = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readlinne.question("Qual sua linguagem de programação preferida?\n", language => {

    if(language === 'Python'){
        console.log('\nIsso nemm é linguagem')
    } else{
        console.log(`\nA minha linguagem preferida é ${language}`)
    }
    readlinne.close()

})