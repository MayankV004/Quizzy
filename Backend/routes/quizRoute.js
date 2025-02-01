import express from "express";
import { submitQuiz, getQuizHistory } from "../controllers/quiz-controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/submit", protectRoute, submitQuiz);
router.get("/history", protectRoute, getQuizHistory);

export default router;