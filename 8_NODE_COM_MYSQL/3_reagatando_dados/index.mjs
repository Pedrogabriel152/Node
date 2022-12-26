import express from "express";
import exphbs from 'express-handlebars'
import mysql from 'mysql'

const  app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.post('/books/insertbook', (req, res) => {

    const titulo = req.body.titulo
    const paginas = parseInt(req.body.paginas)

    const sql = `INSERT INTO books (titulo,numero_de_pagina) VALUES ('${titulo}',${paginas})`

    conn.query(sql, err => {
        if(err){
            console.log(err)
        }

        res.redirect('/books')
    })

})

app.get('/books', (req, res) => {
    
    const sql = 'SELECT * FROM books'

    conn.query(sql, (err, data) => {
        if(err){
            console.log(err)
            return
        }

        const books = data

        console.log(books)

        res.render('books', { books })
    })

})

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(err => {
    if(err){
        console.log(err)
    }

    console.log('Conectou ao MySql')

    app.listen(3000, () => console.log("App rodando"))
})

