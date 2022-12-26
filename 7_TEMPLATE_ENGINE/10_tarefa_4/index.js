const express = require("express");
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))


const produtos = [
    {
        titulo: 'TV 4K',
        descricao: 'A melhor imagem do mercado',
        valor: 3500,
        id: 1
    },
    {
        titulo: 'Celular Motorola',
        descricao: 'O melhor da micro-tecnologia em um único aparelho',
        valor: 2000,
        id: 2
    },
    {
        titulo: 'Nootebook IdealPad-3',
        descricao: 'Raizem 7',
        valor: 3500,
        id: 3
    }
]

app.get('/produtos/:id', (req, res) => {
    const produto = produtos[req.params.id - 1]
    
    res.render('produto', { produto })
    console.log(produto)
})

app.get('/produtos', (req, res) => {
    res.render('produtos', { produtos })
})


app.get('/', (req, res) =>{

    const user = "Pedro Gabriel"

    res.render('home', { user })
})

app.listen(3000, () => console.log('App rodando'))