// const Reservation = require('../models/reservationModel');
import Reservation from '../models/reservationModel.mjs'

export const createReservation = async (req, res) => {
  try {
    const { service_id, date, time, number_of_people } = req.body;
    const reservation = new Reservation({
      user_id: req.user.id,
      service_id,
      date,
      time,
      number_of_people,
    });
    await reservation.save();
    res.status(201).json({ message: 'Đặt chỗ thành công', reservation });
  } catch (error) {
    res.status(400).json({ message: 'Lỗi đặt chỗ', error: error.message });
  }
};

export const getUserReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user_id: req.user.id }).populate('service_id');
    res.status(200).json(reservations);
  } catch (error) {
    res.status(400).json({ message: 'Không thể lấy danh sách đặt chỗ', error: error.message });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    await Reservation.findOneAndDelete({ _id: id, user_id: req.user.id });
    res.status(200).json({ message: 'Xóa đặt chỗ thành công' });
  } catch (error) {
    res.status(400).json({ message: 'Không thể xóa đặt chỗ', error: error.message });
  }
};
