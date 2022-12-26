import  express  from "express";
import exphbs from "express-handlebars"

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: 'Pedro',
        surname: 'Gabriel',
        age: 20
    }

    const palavra = 'Teste'

    res.render('home', { user: user, palavra })
})

app.listen(3000, () => console.log('App funcionando'))