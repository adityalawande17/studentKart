import mongoose from "mongoose";

const materialSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      trim: true,
    },
    year: {
      required: true,
      type: String,
      enum: ["FE", "SE", "TE", "BE"],
    },
    subject: {
      required: true,
      type: String,
    },
    category: {
      required: true,
      enum: ["college", "interview", "roadmap"],
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Material = mongoose.model("Material", materialSchema);

export default Material;
