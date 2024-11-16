const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getAllBookings);

router.get('/new', bookingController.getNewBookingForm);

router.post('/', bookingController.createBooking);

router.get('/:id/edit', bookingController.getEditBookingForm);

router.put('/:id', bookingController.updateBooking);

router.delete('/:id', bookingController.cancelBooking);

module.exports = router;
