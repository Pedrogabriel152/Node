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

const basePath = path.join(__dirname, 'templetes')

app.use('/users',users)

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {

    console.log(`App rodando na porta ${port}`)

})

