import express from "express"
import ProductController from "../controllers/ProductController.mjs"

const router = express.Router()

router.post('/create',ProductController.createProductPost)
router.get('/create',ProductController.createProduct)
router.get('/edit/:id',ProductController.editProduct)
router.post('/edit', ProductController.editProductPost)
router.get('/:id',ProductController.getProduct)
router.post('/delete/:id', ProductController.delete)
router.get("/", ProductController.showProducts)

export default router;