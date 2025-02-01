import express from "express";
import { SignUp, Login, Logout , verifyAuth, getUserData } from "../controllers/auth-controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", SignUp);

router.post("/login", Login);

router.post("/logout", Logout);

router.get("/verify", protectRoute, verifyAuth);

router.get("/user", protectRoute, getUserData);

export default router;
