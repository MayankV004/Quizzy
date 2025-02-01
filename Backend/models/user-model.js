import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname : {
        type:String,
        required:[true , "Please provide your name"]
    },
    email : {
        type:String,
        required:[true , "Please provide youe email"],
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[6 , "Password must be atleast 6 character long"] 
    },
    points:{
        type:Number,
        default:0
    },
    profilePic:{
        type:String,
        default:""
    }

}, {timestamps:true})

const User = mongoose.model("user" , userSchema)
export default User;