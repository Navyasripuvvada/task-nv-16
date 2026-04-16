const authservices = require("../services/authservices")
exports.registerUser = async(req,res) =>{
    try{
    const {username,mail,password} =req.body;
    await authservices.registerUser(username,mail,password)
   res.json({message:"user added successfully"});
    }catch(err){
        res.status(400).json({message:err.message})
    }

}
exports.loginUser = async(req,res)=>{
    try{
        const{mail,password}=req.body;
        const token = await authservices.loginUser(mail,password)
        res.json({message:"Login successful" ,token})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}
exports.userbyid = async (req, res) => {
    try {
        const id = req.user.id; 

        const userbyid = await authservices.getbytoken(id);

        res.json(userbyid);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};