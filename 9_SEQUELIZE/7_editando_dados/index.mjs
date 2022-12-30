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


app.get('/', function (req, res) {
    User.findAll({ raw: true })
      .then((users) => {
        console.log(users)
        res.render('home', { users: users })
      })
      .catch((err) => console.log(err))
  })
  
  app.get('/users/create', function (req, res) {
    res.render('adduser')
  })
  
  app.post('/users/create', async function (req, res) {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter
  
    if (newsletter === 'on') {
      newsletter = true
    }
  
    await User.create({ name, occupation, newsletter })
      .then(res.redirect('/'))
      .catch((err) => console.log(err))
  })
  
  app.get('/users/:id', function (req, res) {
    const id = req.params.id
  
    User.findOne({
      raw: true,
      where: {
        id: id,
      },
    })
      .then((user) => {
        console.log(user)
        res.render('userview', { user })
      })
      .catch((err) => console.log(err))
  })
  
  app.post('/users/delete/:id', function (req, res) {
    const id = req.params.id
  
    User.destroy({
      where: {
        id: id,
      },
    })
      .then((user) => {
        res.redirect('/')
      })
      .catch((err) => console.log(err))
  })
  
  app.get('/users/edit/:id', function (req, res) {
    const id = req.params.id
  
    User.findOne({
      raw: true,
      where: {
        id: id,
      },
    })
      .then((user) => {
        console.log(user)
        res.render('useredit', { user })
      })
      .catch((err) => console.log(err))
  })

conn.sync()
.then(() => {
    app.listen(3000, () => console.log("App rodando"))
})
.catch(err => {
    console.log(err)
})