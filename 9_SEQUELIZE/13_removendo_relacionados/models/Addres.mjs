import { DataTypes } from "sequelize";
import db from '../db/conn.mjs';
import User from "./User.mjs";

const Addres = db.define('Addres', {

    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
})

User.hasMany(Addres)
Addres.belongsTo(User)

export default Addres