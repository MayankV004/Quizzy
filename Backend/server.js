import express from "express"
import connectDB from "./config/mongoose-connection.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;

//Database Connection
connectDB()

//Middlewares
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())




app.get("/" , (req , res)=>{
    res.send("Yooo")
})

app.listen(PORT , ()=>{
    console.log("Server is running on port 3000")
})