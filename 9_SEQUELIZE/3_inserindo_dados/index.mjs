import express from "express";
import exphbs from 'express-handlebars'
import sequelize from "./db/conn.mjs";
import User from "./models/User.mjs";

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

app.post('/users/create', async (req, res) => {

    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    } else {
        newsletter = false
    }

    await User.create({name, occupation, newsletter})

    res.redirect('/')

})

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync()
.then(() => {
    app.listen(3000, () => console.log("App rodando"))
})
.catch(err => {
    console.log(err)
})