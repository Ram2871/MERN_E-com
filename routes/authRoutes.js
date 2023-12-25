import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router();

// routing
//Register || method POST
router.post("/register", registerController);

//Login || method POST
router.post("/login", loginController);

//Forgot Password || method POST
router.post("/forgot-password", forgotPasswordController);

//test || method get
router.get("/test", requireSignIn, isAdmin, testController);

//Auth User Protected Route  || method get
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//Auth Admin Protected Route  || method get
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//Profile  || method 
router.put("/profile-update",requireSignIn,updateProfileController);

export default router;
