import express from 'express';
const router = express.Router()

// Controller
import ToughtController from '../controllers/ToughtController.mjs';

// HELPERS
import checkAuth from '../helpers/auth.mjs';

router.get('/add', checkAuth, ToughtController.createTought)
router.post('/add', checkAuth, ToughtController.createToughtPost)
router.get('/edit/:id', checkAuth, ToughtController.edtiTought)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.post('/remove', checkAuth, ToughtController.remove)
router.get('/', ToughtController.showToughts)

export default router