import express from 'express';
import serviceController from '../controllers/serviceController.mjs';
const router = express.Router();

router.get('/', serviceController.getServices);

export default router; 
