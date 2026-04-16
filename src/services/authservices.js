const user=require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const mongoose=require("mongoose")
exports.registerUser=async(username,mail,password)=>{
    const existingUser=await user.findOne({mail})
    if (existingUser){
        throw new Error("user already exists");
    }
    const hashedpassword = await bcrypt.hash(password,10);
    const newUser = new user({
       username,
       mail,
       password:hashedpassword
    });
    return await newUser.save();
}
exports.loginUser=async(mail,password)=>{
    const alreadyloginuser=  await user.findOne({mail})
    if(!alreadyloginuser){
       throw new Error("User Not Found")
    }
    const isMatch = await bcrypt.compare(password,alreadyloginuser.password);
    if(!isMatch){
        throw new Error("password doesnot match")
    }
    const token = jwt.sign({id:alreadyloginuser._id,mail:alreadyloginuser.mail},process.env.JWT_SECRET,{"expiresIn":"1h"})
    return token;

    }
exports.getbytoken = async (id) => {
    const userbyid = await user.findById(id);
    return userbyid;
};
    

