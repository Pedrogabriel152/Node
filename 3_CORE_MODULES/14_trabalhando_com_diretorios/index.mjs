import fs from 'fs';

if(!fs.existsSync('./minhapasta')){
    console.log('Não existe')
}

if(!fs.existsSync('./minhapasta')){
    fs.mkdirSync('minhapasta')
}

if(fs.existsSync('./minhapasta')){
    console.log('Existe')
}