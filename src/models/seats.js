const mongoose = require("mongoose");
const seatSchema=new mongoose.Schema({
    seatNumber:{
      type:Number,
      required:true
    },
    user:{
        type:String,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    isBooked:{
        type:Boolean,
        default:true
    }
})
module.exports = mongoose.model("Seat", seatSchema);