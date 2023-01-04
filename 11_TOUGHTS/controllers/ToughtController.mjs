import Toughts from "../models/Toughts.mjs"
import User from "../models/User.mjs"
import { Op } from "sequelize"

class ToughtController{

    static async showToughts(req, res){

        let search = ''

        if(req.query.search){
            search = req.query.search
        }

        let order = 'DESC'

        if(req.query.order === 'old'){
            order = 'ASC'
        }

        const toughtsData = await Toughts.findAll({
            include: User,
            where: {
                title: {
                    [Op.like]: `%${search}%`
                }
            },
            order: [['createdAt', order]]
        })

        const toughts = toughtsData.map(result => result.get({ plain:true }))

        let toughtsQty = toughts.length

        if(toughtsQty === 0){
            toughtsQty = false
        }

        res.render('toughts/home', { toughts, search, toughtsQty })
    }

    static async dashboard(req, res){

        const userId = req.session.userid

        const user =  await User.findOne({ 
            where: { 
                id: userId 
            },
            include: Toughts,
            plain: true
        })

        // Checando se usuário existe
        if(!user){
            req.session.destroy()
            res.redirect('/login')
        }

        const toughts = user.Toughts.map( result => result.dataValues)

        let emptyToughts = false

        if(toughts.length === 0){
            emptyToughts = true
        }

        console.log(toughts)

        res.render('toughts/dashboard', { toughts, emptyToughts })

    }

    static createTought(req, res){
        res.render('toughts/create')
    }

    static createToughtPost(req, res){

        const tought = {
            title: req.body.title,
            UserId: req.session.userid
        }

        Toughts.create(tought)
        .then(() => {

            req.flash('message', 'Pensamento criado com sucesso!')

            req.session.save(() => {

                res.redirect('/toughts/dashboard')

            })

        })
        .catch(err => console.log(err))

    }

    static remove(req, res){

        const id = req.body.id
        const UserId = req.session.userid

        Toughts.destroy({ where: { id: id, UserId: UserId } })
        .then(() => {

            req.flash('message', 'Pensamento removido com sucesso!')

            req.session.save(() => {

                res.redirect('/toughts/dashboard')

            })

        })
        .catch(err => console.log(err))

    }

    static async edtiTought(req, res){

        const id = req.params.id

        const tought = await Toughts.findOne({ 
            raw: true, 
            where: { 
                id: id 
            } 
        })

        res.render('toughts/edit', { tought })

    }

    static async edtiToughtPost(req, res){

        const { id, title } = req.body

        let tought = await Toughts.findOne({raw: true, where: { id: id }})

        if(!tought){
            req.flash('message', 'Pensamento não encontrado!')

            req.session.save(() => {

                res.redirect('/toughts/dashboard')

            })
        }

        tought = {
            title
        }

        Toughts.update(tought, { where: { id: id } })
        .then(() => {

            req.flash('message', 'Pensamento atualizado com sucesso!')

            req.session.save(() => {

                res.redirect('/toughts/dashboard')

            })
        })
        .catch(err => console.log(err))
    }

}

export default ToughtController