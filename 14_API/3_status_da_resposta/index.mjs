import express  from "express";

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)
 
app.use(express.json())

// Rotas - endpoints
app.post('/createproduct', (req, res) => {

    const { name, price } = req.body

    console.log(name)
    console.log(price)

    if(!name){
        res.status(422).json({
            message: 'O campo nome é obrigatorio!'
        })
        return
    }

    res.status(201).json({
        message: `O produto ${name} foi criado com sucesso`
    })

})

app.get('/', (req, res) => {

    res.status(200).json({
        massage: 'primeira rota criada com sucesso'
    })

})


app.listen(3000, () => console.log("Rodando"))