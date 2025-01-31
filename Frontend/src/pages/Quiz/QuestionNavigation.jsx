import React from 'react';

export const QuestionNavigation = ({ 
  totalQuestions, 
  currentQuestionIndex, 
  answeredQuestions, 
  onQuestionSelect 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="flex flex-wrap gap-2 justify-center">
        {[...Array(totalQuestions)].map((_, index) => (
          <button
            key={index}
            onClick={() => onQuestionSelect(index)}
            className={`
              w-10 h-10 rounded-full transition-all duration-300
              ${index === currentQuestionIndex 
                ? 'bg-green-600 text-white' 
                : answeredQuestions.includes(index)
                ? 'bg-green-200 text-green-800'
                : 'bg-gray-200 text-gray-600'}
              hover:scale-110 hover:shadow-md
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};