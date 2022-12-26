import  express  from "express";
import exphbs from "express-handlebars"

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ['item a', 'item b', 'item c']

    res.render('dashboard', { items })
})

app.get('/', (req, res) => {

    const user = {
        name: 'Pedro',
        surname: 'Gabriel',
        age: 20
    }

    const palavra = 'Teste'

    const auth = true

    const aproved = true

    res.render('home', { user: user, palavra, auth, aproved })
})

app.listen(3000, () => console.log('App funcionando'))