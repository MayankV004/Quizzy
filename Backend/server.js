import express from "express"
import connectDB from "./config/mongoose-connection.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js"
import quizRoute from "./routes/quizRoute.js"
import cors from "cors"

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;

//Database Connection
connectDB()

//Middlewares
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(
    cors({
      origin: "http://localhost:5173/",
      credentials: true,
    })
  );


//Routes
app.use("/v1/auth", authRoute);
app.use("/v1/quiz", quizRoute);



app.listen(PORT , ()=>{
  console.log(`Server is running on port ${PORT}`);
})