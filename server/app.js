import express from "express";
import cors from "cors";
import healthRoute from "./routes/health.route.js";
import materialRoute from "./routes/material.route.js";

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/", healthRoute);
app.use("/materials", materialRoute);

export default app;
