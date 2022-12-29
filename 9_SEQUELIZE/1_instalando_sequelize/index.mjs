import express from "express";
import exphbs from 'express-handlebars'
import sequelize from "./db/conn.mjs";

const conn = sequelize

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

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => console.log("App rodando"))