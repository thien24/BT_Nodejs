import jwt from "jsonwebtoken";
import User from "../models/userModel.mjs";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "Đăng ký thành công!" });
  } catch (error) {
    res.status(400).json({ message: "Lỗi đăng ký", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Sai thông tin đăng nhập" });
    }

    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
    res.status(200).json({ message: "Đăng nhập thành công", token });
  } catch (error) {
    res.status(400).json({ message: "Lỗi đăng nhập", error: error.message });
  }
};
