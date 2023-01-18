import Product from "../models/Product.mjs"

class ProductController{

    // static async showProducts(req, res){

    //     const products = await Product.getProducts()

    //     res.render('product/all', { products })
    // }

    static createProduct(req, res){
        res.render('product/create')
    }

    static async createProductPost(req, res){

        const { name, image, price, description } = req.body

        const product = new Product({name, image, price, description})

        await product.save()

        res.redirect("/products")

    }

    // static async getProduct(req, res){

    //     const id = req.params.id

    //     const product = await Product.getProductById(id)

    //     res.render('product/product', { product })

    // }

    // static async delete(req, res){

    //     const id = req.params.id
        
    //     await Product.deleteProductById(id)

    //     res.redirect('/products')

    // }

    // static async editProduct(req, res){

    //     const id = req.params.id

    //     const product = await Product.getProductById(id)

    //     res.render("product/edit", { product })

    // }

    // static async editProductPost(req, res){

    //     const { id, name, image, price, description } = req.body

    //     const product = new Product(name, image, price, description)

    //     await product.update(id)

    //     res.redirect('/products')

    // }

}

export default ProductController;