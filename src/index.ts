import express from "express";
import dotenv from "dotenv";
import userRoutes from "./modules/users/users.routes";
import authRoutes from "./modules/auth/auth.routes";
import tasksRoutes from "./modules/tasks/tasks.routes";
import categoriesRoutes from "./modules/category/category.routes";


dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", tasksRoutes);
app.use("/api", categoriesRoutes);

app.listen(port, () => {
  console.log("Server is Running!!!");
});