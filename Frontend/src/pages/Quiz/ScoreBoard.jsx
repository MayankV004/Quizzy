import React from 'react';

export const ScoreBoard = ({ 
  score, 
  totalQuestions, 
  timeRemaining 
}) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 grid grid-cols-3 gap-4">
      <div className="text-center">
        <p className="text-sm text-gray-500">Total Questions</p>
        <p className="text-xl font-bold text-green-600">{totalQuestions}</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Score</p>
        <p className="text-xl font-bold text-green-600">{score}</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Time Left</p>
        <p className="text-xl font-bold text-green-600">
          {formatTime(timeRemaining)}
        </p>
      </div>
    </div>
  );
};