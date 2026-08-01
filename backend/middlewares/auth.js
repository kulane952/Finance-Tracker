import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const prodect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = user;

    console.log("decoded:", decoded);
    console.log("user:", req.user);

    next();

  } catch (err) {
    console.error("Token verification error:", err);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};