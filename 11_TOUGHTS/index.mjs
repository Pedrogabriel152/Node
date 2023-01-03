import express from "express";
import exphbs from "express-handlebars"
import sequelize from "./db/conn.mjs";
import session from "express-session";
import fileStore from "session-file-store";
import flash from "express-flash";
import path from "path"
import os from "os"

// IMPORTES DE ROUTES
import taughtsRoutes from "./routes/taughtsRoutes.mjs";
import authRoutes from './routes/authRoutes.mjs'

// IMPORTE CONTROLLER
import ToughtController from "./controllers/ToughtController.mjs";

const FileStore = fileStore(session)

const app = express()

const conn = sequelize

// MODELS
import Toughts from "./models/Toughts.mjs";
import User from "./models/User.mjs";

// RECEBENDO DADO EM JSON
app.use(express.json())

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

// TEMPLETE ENGINE
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// RECEBER RESPOSTA DO BODY
app.use(
    express.urlencoded({
        extended: true
    })
)

// PUBLIC PATH
app.use(express.static('public'))

// SESSION MIDDLEWARE
app.use(
    session({
       name: "session",
       secret: "nosso_secret",
       resave: false,
       saveUninitialized: false,
       store: new FileStore({
        logFn: function() {},
        path: path.join(os.tmpdir(), 'sessions')
       }),
       cookie: {
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
       }
    })
)

// FLASH MESSAGES
app.use(flash())

// SER SESSION TO RES
app.use((req, res, next) => {

    if(req.session.userid) {
        res.locals.session = req.session
    }

    next()
})

// ROUTES
app.use('/taughts', taughtsRoutes)

app.use('/', authRoutes)

app.get('/', ToughtController.showToughts)

conn.sync()
.then(() => {
    app.listen(3000, () => console.log("App rodando"))
})
.catch(err => console.log(err))