import User from '../models/User.mjs'
import bcrypt from 'bcryptjs'

class AuthController{

    static login(req, res){
        res.render('auth/login')
    }

    static async loginPost(req, res){
        
        const { email, password } = req.body

        // USUARIO EXISTE
        const user = await User.findOne({where: { email: email }})

        if(!user){
            req.flash('message', 'Usuário não incontrado')
            res.render('auth/login')
            return
        }

        // CHECANDO A SENHA
        const passwordMatch = bcrypt.compareSync(password, user.password)

        if(!passwordMatch){
            req.flash('message', 'Senha incorreta')
            res.render('auth/login')
            return
        }

        try{ 

            // Inicializando a sessão
            req.session.userid = user.id

            req.flash('message', 'Logado com sucesso')

            req.session.save(() => {
                res.redirect('/')
            })

        } catch(err){
            console.log(err)
        }

    }

    static register(req, res){
        res.render('auth/register')
    }

    static async registerPost(req, res){
        
        const { name, email, password, confirmpassword } = req.body

        // VALODAÇÃO DE SENHA
        if(password != confirmpassword){
            req.flash('message', 'As senhas não conferem, tente novamente!')
            res.render('auth/register')
            return
        }

        // VALIDAÇÃO DE USUARIO
        if(name == ' ' || name == ''){
            req.flash('message', 'O nome de usuário precisa ser preencido')
            res.render('auth/register')
            return
        }

        // CHECANDO SE USUARIO EXISTE
        const checkIfUserExists = await User.findOne({ where: { email: email } })
        const checkIfNameExists = await User.findOne({ where: { name: name } })
        
        if(checkIfNameExists){
            req.flash('message', 'Nome de usuário já existe, tente outro!')
            res.render('auth/register')
            return
        }

        if(checkIfUserExists){
            req.flash('message', 'O e-mail já está em uso!')
            res.render('auth/register')
            return
        }

        // CRIAR A SENHA
        const salt = bcrypt.genSaltSync(10)
        const hashedPassoword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: hashedPassoword
        }

        try{
            const createUser = await User.create(user)

            req.flash('message', 'Cadastro realizado com sucesso')

            // Inicializando a sessão
            req.session.userid = createUser.id

            req.session.save(() => {
                res.redirect('/')
            })

        } catch(err){
            console.log(err)
        }

    }

    static logout(req, res){
        req.session.destroy()
        res.redirect('/login')
    }
    
}

export default AuthController