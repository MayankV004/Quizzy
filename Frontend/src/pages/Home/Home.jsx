import React from 'react'
import Header from '../../conponents/Header/Header'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container flex-grow mx-auto px-4 py-8 flex justify-center items-center overflow-auto">
        <div className="text-center ">
          <h1 className="text-4xl font-bold mb-4">Learn new concepts from each question</h1>
          <p className="text-xl mb-8">We help you prepare for Biology quizzes</p>
          <div className="space-x-4">
            <Link to="/quiz" className="bg-green-400 hover:bg-green-500 text-black px-6 py-2 rounded-full font-semibold ">Start solving</Link>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold border hover:bg-gray-100 border-black">Know more</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home