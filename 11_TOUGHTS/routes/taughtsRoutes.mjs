import express from 'express';
const router = express.Router()

// Controller
import ToughtController from '../controllers/ToughtController.mjs';

router.get('/', ToughtController.showToughts)

export default router