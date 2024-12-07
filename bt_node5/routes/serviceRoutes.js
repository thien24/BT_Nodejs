import express from 'express';
import { getServices } from '../controllers/serviceController.mjs';

const router = express.Router();

router.get('/', getServices);

export default router; // Xuất router
