import Product from "../models/Product.mjs"

class ProductController{

    static async showProducts(req, res){

        const products = await Product.getProducts()

        res.render('product/all', { products })
    }

    static createProduct(req, res){
        res.render('product/create')
    }

    static createProductPost(req, res){

        const { name, image, price, description } = req.body

        const product = new Product(name, image, price, description)

        product.save()

        res.redirect("/products")

    }

}

export default ProductController;