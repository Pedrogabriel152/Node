import Toughts from "../models/Toughts.mjs"
import User from "../models/User.mjs"

class ToughtController{

    static showToughts(req, res){
        res.render('toughts/home')
    }

}

export default ToughtController