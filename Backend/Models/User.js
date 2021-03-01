const mongoose = require("mongoose");
const signUpSchema=new mongoose.Schema(
    {
        name:{type:String,require:true},
        email:{type:String,required:true},
        password:{type:String,required:true}
    },
    { timestamps: true }
)
module.exports=mongoose.model("User",signUpSchema);