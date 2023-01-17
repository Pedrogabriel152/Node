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

    static async getProduct(req, res){

        const id = req.params.id

        const product = await Product.getProductById(id)

        res.render('product/product', { product })

    }

    static async delete(req, res){

        const id = req.params.id
        
        await Product.deleteProductById(id)

        res.redirect('/products')

    }

}

export default ProductController;