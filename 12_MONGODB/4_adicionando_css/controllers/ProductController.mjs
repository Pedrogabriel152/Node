import Product from "../models/Product.mjs"

class ProductController{

    static showProducts(req, res){
        res.render('product/all')
    }

    static createProduct(req, res){
        res.render('product/create')
    }

    static createProductPost(req, res){

        const { name, price, description } = req.body

        const product = new Product(name, price, description)

        product.save()

        res.redirect("/products")

    }

}

export default ProductController;