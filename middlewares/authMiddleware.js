// Protected Routes token base
import JWT from "jsonwebtoken";
import userModel from "../models/User.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(401).json({ message: "Authorization header is missing" });
    }

    const token = authorizationHeader.split(" ")[1]; // Extract the token after "Bearer"

    if (!token) {
      return res.status(401).json({ message: "JWT token is missing" });
    }

    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("login error", error);
    return res.status(401).json({ message: "Invalid JWT token" });
  }
};



//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role != 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
