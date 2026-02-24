import express from "express";
import {
  getMaterials,
  createMaterial,
  updateMaterial,
  deleteMaterial,
} from "../controllers/materialController.js";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getMaterials);
router.post("/", protect, adminOnly, createMaterial);
router.put("/:id", protect, adminOnly, updateMaterial);
router.delete("/:id", protect, adminOnly, deleteMaterial);

export default router;
