const path = require('path')
const express = require('express')
const router = express.Router()

const basePath = path.join(__dirname, '../paginas')

router.get('/produtos', (req, res) =>{
    res.status = 200
    res.sendFile(`${basePath}/produtos.html`)
})

module.exports = router