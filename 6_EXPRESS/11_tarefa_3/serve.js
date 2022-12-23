const express = require('express')
const app = express()
const path = require('path')
const router = require('./produtos')

const port = 5000
const basePath = path.join(__dirname, 'paginas')

app.use(router)

app.get('/', (req,res) =>{
    res.status = 200
    res.sendFile(`${basePath}/home.html`)
})

app.listen(port, () => console.log(`Rodando na porta ${port}`))

