const express = require("express")
const middleware=require("../middleware/middleware")
const route = express.Router();
const authcontroller = require("../controllers/authcontroller")
route.post("/register",authcontroller.registerUser)
route.post("/login",authcontroller.loginUser);
route.get("/id",middleware,authcontroller.userbyid)
module.exports = route;