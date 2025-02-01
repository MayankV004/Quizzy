import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  answers: [{
    questionId: String,
    answer: String,
    isCorrect: Boolean
  }],
  completedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Quiz = mongoose.model("quiz", quizSchema);
export default Quiz;
