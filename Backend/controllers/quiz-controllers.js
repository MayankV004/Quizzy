import User from "../models/user-model.js";
import Quiz from "../models/quiz-model.js";

export const submitQuiz = async (req, res) => {
  try {
    const { score, answers } = req.body;
    const userId = req.user._id;

    // Create new quiz attempt record
    const quizAttempt = new Quiz({
      user: userId,
      score,
      answers,
      completedAt: new Date()
    });

    await quizAttempt.save();

    // Update user's total points
    await User.findByIdAndUpdate(userId, {
      $inc: { points: score }
    });

    res.status(200).json({
      status: "success",
      message: "Quiz submitted successfully",
      data: quizAttempt
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message
    });
  }
};

export const getQuizHistory = async (req, res) => {
  try {
    const userId = req.user._id;
    const quizHistory = await Quiz.find({ user: userId })
      .sort({ completedAt: -1 })
      .limit(10);

    res.status(200).json({
      status: "success",
      data: quizHistory
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message
    });
  }
};