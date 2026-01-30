import express from "express";
import cors from "cors";
import healthRoute from "./routes/health.route.js";

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/", healthRoute);

export default app;
