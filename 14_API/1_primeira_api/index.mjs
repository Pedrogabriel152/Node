import express  from "express";

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// Rotas - endpoints
app.get('/', (req, res) => {

    res.json({
        massage: 'primeira rota criada com sucesso'
    })

})

app.listen(3000, () => console.log("Rodando"))