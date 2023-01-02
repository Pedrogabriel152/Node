import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('nodemvc',
                                 'root',
                                 '',{
    host: 'localhost',
    dialect: 'mysql'
})

try{

    sequelize.authenticate()
    console.log('Conectou no banco')

} catch(err){
    console.log(err)
}

export default sequelize