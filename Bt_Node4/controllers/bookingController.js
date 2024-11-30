const Booking = require('../controllers/bookingController.js');

exports.getAllBookings = async (req, res) => {
    const bookings = await Booking.find().sort({ date: 1, time: 1 });
    res.render('index', {
        bookings,
        message: req.query.message || null,
        alertType: req.query.alertType || null 
    });
};

exports.getNewBookingForm = (req, res) => {
    res.render('new', { message: null, alertType: null });
};

exports.createBooking = async (req, res) => {
    try {
        const { customerName, date, time } = req.body;
        const existingBooking = await Booking.findOne({ date, time });

        if (existingBooking) {
            return res.redirect('/bookings?message=Lịch+đặt+chỗ+đã+tồn+tại!&alertType=danger');
        }

        const newBooking = new Booking({ customerName, date, time });
        await newBooking.save();
        res.redirect('/bookings?message=Đặt+chỗ+thành+công!&alertType=success');
    } catch (error) {
        res.redirect('/bookings?message=Đã+xảy+ra+lỗi+khi+tạo+đặt+chỗ!&alertType=danger');
    }
};

exports.getEditBookingForm = async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    res.render('edit', { booking, message: null, alertType: null });
};

exports.updateBooking = async (req, res) => {
    try {
        const { customerName, date, time } = req.body;
        await Booking.findByIdAndUpdate(req.params.id, { customerName, date, time });
        res.redirect('/bookings?message=Cập+nhật+lịch+đặt+chỗ+thành+công!&alertType=success');
    } catch (error) {
        res.redirect(`/bookings/${req.params.id}/edit?message=Đã+xảy+ra+lỗi+khi+cập+nhật!&alertType=danger`);
    }
};

exports.cancelBooking = async (req, res) => {
    try {
        await Booking.findByIdAndUpdate(req.params.id, { status: 'Cancelled' });
        res.redirect('/bookings?message=Hủy+lịch+đặt+chỗ+thành+công!&alertType=success');
    } catch (error) {
        res.redirect('/bookings?message=Đã+xảy+ra+lỗi+khi+hủy+đặt+chỗ!&alertType=danger');
    }
};
