import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const QuizResult = ({ quizData, selectedAnswers, score }) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestionDetails = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-green-50 p-8 flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-4">Quiz Results</h1>
          <div className="text-xl">
            <p>Total Score: <span className="font-bold text-green-600">{score}</span></p>
            <p>
              Correct Answers: 
              <span className="font-bold text-green-600">
                {selectedAnswers.filter(ans => ans?.isCorrect).length}
              </span>
              {' / '}
              <span>{quizData.length}</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {quizData.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const correctOption = question.options.find(opt => opt.is_correct);

            return (
              <div 
                key={question.id} 
                className={`
                  border-2 rounded-lg p-4 
                  ${userAnswer?.isCorrect 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-red-500 bg-red-50'}
                `}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold mb-2">
                      {question.description}
                    </p>
                    <p className={`
                      font-medium 
                      ${userAnswer?.isCorrect 
                        ? 'text-green-700' 
                        : 'text-red-700'}
                    `}>
                      Your Answer: {userAnswer?.answer || 'Not Answered'}
                    </p>
                    <p className="text-green-700 font-medium">
                      Correct Answer: {correctOption?.description}
                    </p>
                  </div>
                  <button 
                    onClick={() => toggleQuestionDetails(index)}
                    className="bg-green-100 text-green-700 p-2 rounded-full hover:bg-green-200"
                  >
                    {expandedQuestion === index ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>

                {expandedQuestion === index && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <h3 className="font-bold text-green-700 mb-2">Detailed Solution</h3>
                    <p className="text-gray-700">{question.detailed_solution}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className='mt-5 gap-3'>
      <NavLink to="/" className='text-green-400 hover:underline'>Back to Home</NavLink>
      </div>
    </div>
  );
};