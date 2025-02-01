import React from 'react';
import Header from '../../components/Header/Header';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Quizzy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering learners through interactive biology quizzes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make biology education engaging, accessible, and effective through interactive learning experiences.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">What We Offer</h3>
            <p className="text-gray-600">
              Carefully curated biology quizzes, instant feedback, and detailed explanations to enhance your learning.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Community</h3>
            <p className="text-gray-600">
              Join thousands of students who are mastering biology concepts through our interactive platform.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Quizzy was born from a simple observation: traditional biology learning can be challenging and sometimes overwhelming. We believed there had to be a better way to make complex biological concepts more approachable and engaging.
            </p>
            <p className="mb-4">
              Founded by a team of educators and technology enthusiasts, we set out to create a platform that combines scientific accuracy with an enjoyable learning experience. Our approach focuses on breaking down complex topics into digestible pieces and reinforcing understanding through interactive quizzes.
            </p>
            <p>
              Today, we're proud to help students worldwide achieve their academic goals in biology. Our commitment to educational excellence drives us to continuously improve and expand our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}