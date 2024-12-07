// const Service = require('../models/serviceModel');
import Service from "../models/serviceModel.mjs";
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ message: 'Không thể lấy danh sách dịch vụ', error: error.message });
  }
};
