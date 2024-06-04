import React from 'react'
import { Link } from 'react-router-dom'

function ConfirmationPage() {
  return (
    <div>
        <div className="flex items-center justify-center h-screen">
      <div className="p-4 rounded shadow-lg ring ring-indigo-600/50">
        <div className="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-4xl font-bold">Grazie per aver usato Find & Fix!</h1>
          <p>Il tuo messaggio è stato inviato al professionista. Ti contatterà appena possibile !</p>
          <Link to="/"
            className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded  hover:bg-indigo-700 focus:outline-none focus:ring">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-sm font-medium">
              Home
            </span>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ConfirmationPage