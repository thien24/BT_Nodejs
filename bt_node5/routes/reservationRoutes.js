import express from 'express';
import { createReservation, getUserReservations, deleteReservation } from '../controllers/reservationController.mjs';
import { verifyToken } from '../middleware/authMiddleware.js'; // Đảm bảo middleware cũng là ES Module

const router = express.Router();

router.post('/', verifyToken, createReservation);
router.get('/', verifyToken, getUserReservations);
router.delete('/:id', verifyToken, deleteReservation);

export default router; // Xuất router
