import express from "express";
import cors from "cors";
import healthRoute from "./routes/health.route.js";
import materialRoute from "./routes/material.route.js";
import authRoute from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/", healthRoute);
app.use("/materials", materialRoute);
app.use("/users", userRoutes);

//protected routes
app.use("/auth", authRoute);

export default app;
