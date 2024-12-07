import jwt from "jsonwebtoken";

const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) {
      return res.status(401).json({ message: "Token không được cung cấp!" });
    }

    try {
      const decoded = jwt.verify(token, "secret"); 
      req.user = decoded; 
      next();
    } catch (error) {
      return res.status(403).json({ message: "Token không hợp lệ!" });
    }
  },
};

export default authMiddleware;
