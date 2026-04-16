require("dotenv").config();
const connectDB = require("./src/config/db");
const app=require("./src/app")
const PORT=process.env.PORT || 4000;
connectDB();
app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
})
