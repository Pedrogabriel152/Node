import Toughts from "../models/Toughts.mjs"
import User from "../models/User.mjs"

class ToughtController{

    static showToughts(req, res){
        res.render('toughts/home')
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

    

}

export default ToughtController