// import of packages
import express from "express";
import cors from "cors";


// Import from another files in the project

 
const app = express();

// basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

// Import of routes 
import healthCheckRouter from "./routes/healthcheck.routes.js";


app.use("/api/v1/healthCheck",healthCheckRouter);


app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
