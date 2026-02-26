import express from "express";
import {
  addBookmark,
  removeBookmark,
  getBookmarks,
} from "../controllers/userController.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/bookmark/:materialId", protect, addBookmark);
router.delete("/bookmark/:materialId", protect, removeBookmark);
router.get("/bookmarks", protect, getBookmarks);

export default router;
