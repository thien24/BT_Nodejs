import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Lấy token từ header
  if (!token) {
    return res.status(401).json({ message: "Token không được cung cấp!" });
  }

  try {
    const decoded = jwt.verify(token, "secret"); // "secret" là khóa bí mật, thay đổi nếu cần
    req.user = decoded; // Lưu thông tin người dùng vào request
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token không hợp lệ!" });
  }
};
