import React from 'react';

export const QuestionCard = ({ 
  question, 
  options, 
  selectedAnswer, 
  onAnswerSelect 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{question}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <button 
            key={index}
            onClick={() => onAnswerSelect(option.description)}
            className={`
              w-full p-4 text-left rounded-lg transition-all duration-300 ease-in-out
              border-2 
              ${selectedAnswer === option.description 
                ? 'bg-green-500 text-white border-green-600' 
                : 'border-green-200 hover:border-green-500 hover:bg-green-50'}
              transform hover:scale-105 hover:shadow-md
            `}
          >
            <span className="font-medium">
              {option.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};