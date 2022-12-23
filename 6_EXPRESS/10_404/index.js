const express = require("express");
const path = require('path')
const users = require('./users')

const app = express()
const port = 3000

// Ler o body

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// Arquivo estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templetes')

app.use('/users',users)

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {

    console.log(`App rodando na porta ${port}`)

})

