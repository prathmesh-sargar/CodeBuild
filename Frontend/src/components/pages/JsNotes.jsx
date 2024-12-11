import React from 'react';

const JsNotes = () => {
  return (
    <div className="bg-yellow-50 min-h-screen py-10 px-4 sm:px-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-800">
          Mastering JavaScript: The Brain of the Web
        </h1>
        <p className="mt-2 text-lg text-yellow-600">
          Learn how to add interactivity and functionality to your web pages with JavaScript.
        </p>
      </header>

      {/* Stages of JavaScript Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Stages of JavaScript</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">1. Basics</h3>
            <p className="text-gray-700">
              Start with syntax, variables, and basic operations.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Declaring Variables</li>
              <li>Data Types</li>
              <li>Operators</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">2. Control Flow</h3>
            <p className="text-gray-700">
              Use conditions and loops to control the logic of your program.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>If-Else Statements</li>
              <li>Loops</li>
              <li>Switch Cases</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">3. Functions</h3>
            <p className="text-gray-700">
              Write reusable code blocks with functions.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Function Declaration</li>
              <li>Arrow Functions</li>
              <li>Callbacks</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">4. Advanced Concepts</h3>
            <p className="text-gray-700">
              Learn objects, arrays, asynchronous programming, and DOM manipulation.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Object and Array Methods</li>
              <li>Promises and Async/Await</li>
              <li>Event Handling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Test Your JavaScript Knowledge</h2>
        <div className="p-6 bg-yellow-100 shadow-lg rounded-lg">
          <p className="text-gray-800 mb-4">
            Answer this question: <strong>What keyword is used to declare a variable in ES6?</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition">
              A. var
            </button>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition">
              B. let
            </button>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition">
              C. const
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-8">
        <p>Created with ❤️ for first-year students to master JavaScript.</p>
      </footer>
    </div>
  );
};

export default JsNotes;
