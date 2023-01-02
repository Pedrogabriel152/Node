import express from "express";
import exphbs from 'express-handlebars';
import sequelize from "./db/conn.mjs"; 
import Task from "./models/Task.mjs";

const app = express()

const conn = sequelize

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

conn.sync()
.then(() => {
    app.listen(3000, () => console.log("App rodando"))
})
.catch(err => console.log(err))