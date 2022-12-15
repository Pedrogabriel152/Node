import { prompt } from 'inquirer';

prompt([{
    name: 'p1',
    message:'Qual a primeira nota?',
},{
    name:'p2',
    message:"Qual a segunda nota?"
}])
.then(respostas => {
    console.log(respostas)
})
.catch(err =>{
    console.log(err)
})