export const QuizHeader = ({ currentQuestion, totalQuestions, timeRemaining, score }) => {
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
  
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Question</p>
            <p className="text-lg font-semibold text-blue-600">
              {currentQuestion} / {totalQuestions}
            </p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Time Remaining</p>
            <p className="text-lg font-semibold text-green-600">
              {formatTime(timeRemaining)}
            </p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Score</p>
            <p className="text-lg font-semibold text-purple-600">{score}</p>
          </div>
        </div>
      </div>
    );
  };