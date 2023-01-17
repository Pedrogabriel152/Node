import express from "express";
import exphbs from "express-handlebars";
import client from "./db/conn.mjs";
import productRouter from "./routes/produtosRoutes.mjs";

const app =  express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/products', productRouter)

app.listen(3000, () => console.log("App rodando"))