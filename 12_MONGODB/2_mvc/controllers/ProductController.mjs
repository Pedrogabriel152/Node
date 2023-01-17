//import Product from "../models/Product.mjs"

class ProductController{

    static showProducts(req, res){
        res.render('Product/all')
    }

}

export default ProductController;