import User from "../models/user.model.js";
import Material from "../models/material.model.js";

// Add bookmark
export const addBookmark = async (req, res) => {
  try {
    const userId = req.user.id;
    const { materialId } = req.params;

    const user = await User.findById(userId);

    if (!user.bookmarks.includes(materialId)) {
      user.bookmarks.push(materialId);
      await user.save();
    }

    res.json({ message: "Bookmarked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Remove bookmark
export const removeBookmark = async (req, res) => {
  try {
    const userId = req.user.id;
    const { materialId } = req.params;

    const user = await User.findById(userId);

    user.bookmarks = user.bookmarks.filter(
      (id) => id.toString() !== materialId,
    );

    await user.save();

    res.json({ message: "Bookmark removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get bookmarked materials
export const getBookmarks = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("bookmarks");

    res.json(user.bookmarks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
