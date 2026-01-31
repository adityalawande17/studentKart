import express from "express";
import Material from "../models/material.model.js";

const router = express.Router();

//POST - to add material

router.post("/", async (req, res) => {
  try {
    const material = await Material.create(req.body);
    res.status(200).json(material);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//GET

router.get("/", async (req, res) => {
  console.log("QUERY RECEIVED:", req.query);
  try {
    const materials = await Material.find(req.query);
    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
