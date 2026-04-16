const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const movieRoutes = require("./routes/userroutes");
const authRoutes = require("./routes/authroutes");
const console = require("console");
const app=express();
app.use(cors());
app.use(express.json())
app.get("/", (_req, res) => {
  res.send("Backend deployed successfully");
});

app.use("/api/movies",movieRoutes);
app.use("/api/auth",authRoutes);

module.exports=app;