const mongoose = require("mongoose");

let connectDB=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("db conneted")
    }
   catch (error) {
        console.log(error.message);
    }
}
module.exports = connectDB;
