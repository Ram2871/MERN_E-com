import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  categoriesController,
  specificCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//create
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//get all categories
router.get("/get-categories", requireSignIn, isAdmin, categoriesController);

//get specific category
router.get(
  "/specific-category/:slug",
  requireSignIn,
  isAdmin,
  specificCategoryController
);

//delete
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
