import React, { useEffect, useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { QuestionNavigation } from './QuestionNavigation';
import { ScoreBoard } from './ScoreBoard';
import { QuizResult } from './QuizResult';

export default function Quiz() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(900);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch('/api/Uw5CrX');
        const data = await response.json();
        setQuizData(data.questions);
      } catch (error) {
        console.error('Failed to fetch quiz data', error);
      }
    };

    fetchQuizData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (answer) => {
    const currentQuestion = quizData[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(
      opt => opt.description === answer
    );

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = {
      answer,
      isCorrect: selectedOption?.is_correct || false,
      questionId: currentQuestion.id
    };
    setSelectedAnswers(newSelectedAnswers);

    // Update score when moving to next question
    const previousAnswer = selectedAnswers[currentQuestionIndex];
    if (!previousAnswer) {
      setScore(prev => selectedOption?.is_correct ? prev + 4 : prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleNextQuestion = () => {
    const nextIndex = Math.min(quizData.length - 1, currentQuestionIndex + 1);
    setCurrentQuestionIndex(nextIndex);
  };

  const handlePreviousQuestion = () => {
    const prevIndex = Math.max(0, currentQuestionIndex - 1);
    setCurrentQuestionIndex(prevIndex);
  };

  if (!quizData) return <div className="text-green-600 text-xl">Loading Quiz...</div>;

  if (quizSubmitted) {
    return (
      <QuizResult 
        quizData={quizData}
        selectedAnswers={selectedAnswers}
        score={score}
      />
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-green-50 p-8 flex flex-col">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        <ScoreBoard 
          score={score}
          totalQuestions={quizData.length}
          timeRemaining={timeRemaining}
        />

        <QuestionCard 
          question={currentQuestion.description}
          options={currentQuestion.options}
          selectedAnswer={
            selectedAnswers[currentQuestionIndex]?.answer
          }
          onAnswerSelect={handleAnswerSelect}
        />

        <QuestionNavigation 
          totalQuestions={quizData.length}
          currentQuestionIndex={currentQuestionIndex}
          answeredQuestions={
            selectedAnswers
              .map((ans, idx) => ans ? idx : null)
              .filter(idx => idx !== null)
          }
          onQuestionSelect={handleQuestionSelect}
        />

        <div className="flex justify-between items-center">
          <div className="space-x-4">
            <button 
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
            >
              Previous
            </button>
            <button 
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === quizData.length - 1}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <button 
            onClick={handleSubmitQuiz}
            className="bg-green-700 text-white px-8 py-2 rounded-lg hover:bg-green-800 transition-colors"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}