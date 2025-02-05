import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userID , res) =>{
    const token = jwt.sign({userID} , process.env.JWT_SECRET , {
        expiresIn : '15d'
    })

    res.cookie("token" , token ,{
        maxAge: 15 * 24 * 60 * 60 * 1000 , //ms
        httpOnly : true, // Prevent XSS attacks cross site scripting attacks
        samesite:"strict", // CSRF attacks cross site request forgery attacks
        secure :  process.env.NODE_ENV !== "development",
    }) 
}

export default generateTokenAndSetCookie;