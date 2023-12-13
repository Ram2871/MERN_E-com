import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRouter.js";
import cors from "cors";

//config env
dotenv.config();

// database config
connectDB();

// Rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoute);

// Rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to my app",
  });
});

const PORT = process.env.PORT || 8080;

//Run listen
app.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`.bgCyan.white);
});
