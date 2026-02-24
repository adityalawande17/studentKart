import Material from "../models/material.model.js";

export const getMaterials = async (req, res) => {
  try {
    const { year, subject } = req.query;

    let filter = {};

    if (year) filter.year = year;
    if (subject) filter.subject = subject;

    const materials = await Material.find(filter);
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createMaterial = async (req, res) => {
  try {
    const material = await Material.create(req.body);
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateMaterial = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedMaterial = await Material.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedMaterial) {
      return res.status(404).json({ message: "Material not found" });
    }

    res.json(updatedMaterial);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteMaterial = async (req, res) => {
  try {
    const { id } = req.params;

    const material = await Material.findByIdAndDelete(id);

    if (!material) {
      return res.status(404).json({ message: "Material not found" });
    }

    res.json({ message: "Material deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
