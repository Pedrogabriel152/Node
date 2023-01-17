import express from "express"
import ProductController from "../controllers/ProductController.mjs"

const router = express.Router()

router.post('/create',ProductController.createProductPost)
router.get('/create',ProductController.createProduct)
router.get('/:id',ProductController.getProduct)
router.get("/", ProductController.showProducts)

export default router;