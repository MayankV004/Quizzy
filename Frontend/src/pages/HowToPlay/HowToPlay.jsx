import React from 'react';
import Header from '../../conponents/Header/Header';
import { Link } from 'react-router-dom';

export default function HowToPlay() {
  const steps = [
    {
      title: "Sign Up or Log In",
      description: "Create your account or log in to track your progress and compete with others.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      )
    },
    {
      title: "Choose Your Quiz",
      description: "Select from our range of biology topics to test your knowledge.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      )
    },
    {
      title: "Answer Questions",
      description: "Read each question carefully and select the best answer from the options provided.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    },
    {
      title: "Track Progress",
      description: "View your score and review detailed explanations for each answer.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Play</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master biology concepts through our interactive quiz platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {step.icon}
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Scoring System</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Our scoring system is designed to reward both knowledge and quick thinking:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Correct answer: +4 points</li>
              <li>Incorrect answer: -1 point</li>
              <li>Unanswered questions: 0 points</li>
            </ul>
            <p>
              Each quiz has a time limit to keep you engaged and challenge your knowledge. Make sure to answer all questions before the timer runs out!
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/quiz"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            Start Your First Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}