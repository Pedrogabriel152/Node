import  express  from "express";
import exphbs from "express-handlebars"

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ['item a', 'item b', 'item c']

    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        categoria: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js ...',
        comentarios: 400
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            categoria: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender Node.js ...',
            comentarios: 400
        },
        {
            title: 'Aprender PHP',
            categoria: 'PHP',
            body: 'Este artigo vai te ajudar a aprender PHP ...',
            comentarios: 400
        },
        {
            title: 'Aprender JavaScript',
            categoria: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender JavaScript ...',
            comentarios: 400
        },
        {
            title: 'Aprender ReactJS',
            categoria: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender ReactJS ...',
            comentarios: 400
        }
    ]

    res.render('blog', { posts })
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