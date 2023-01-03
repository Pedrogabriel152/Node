import { DataTypes } from "sequelize"
import db from '../db/conn.mjs'

// USER
import User from "./User.mjs"

const Toughts = db.define('Toughts', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
})

Toughts.belongsTo(User)
User.hasMany(Toughts)

export default Toughts