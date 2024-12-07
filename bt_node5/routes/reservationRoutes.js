import express from 'express';
import reservationController from '../controllers/reservationController.mjs';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.post('/', authMiddleware.verifyToken, reservationController.createReservation);
router.get('/', authMiddleware.verifyToken, reservationController.getUserReservations);
router.delete('/:id', authMiddleware.verifyToken, reservationController.deleteReservation);

export default router; 
