import React from 'react';

const CssNotes = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-10 px-4 sm:px-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">
          Mastering CSS: Style Your Web Like a Pro
        </h1>
        <p className="mt-2 text-lg text-blue-600">
          Learn how to create visually stunning and responsive web pages with CSS.
        </p>
      </header>

      {/* Stages of CSS Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Stages of CSS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-2">1. Basics</h3>
            <p className="text-gray-700">
              Start with the fundamentals: Selectors, properties, and values.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Applying Colors</li>
              <li>Font Styling</li>
              <li>Box Model</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-2">2. Layout</h3>
            <p className="text-gray-700">
              Organize content with layout techniques like Flexbox and Grid.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Flexbox Basics</li>
              <li>Grid Systems</li>
              <li>Positioning Elements</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-2">3. Responsive Design</h3>
            <p className="text-gray-700">
              Make your designs adaptable to all screen sizes with media queries.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Media Queries</li>
              <li>Fluid Layouts</li>
              <li>Mobile-First Design</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-2">4. Advanced Styling</h3>
            <p className="text-gray-700">
              Enhance your designs with animations, transitions, and custom properties.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>CSS Variables</li>
              <li>Transitions and Animations</li>
              <li>Custom Shapes with Clipping</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Test Your CSS Knowledge</h2>
        <div className="p-6 bg-blue-100 shadow-lg rounded-lg">
          <p className="text-gray-800 mb-4">
            Answer this question: <strong>Which property is used to change the background color?</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              A. color
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              B. background-color
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              C. font-color
            </button>
          </div>
        </div>
      </section>

      {/* Real-World Applications Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Applications of CSS</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Designing visually appealing websites</li>
          <li>Creating responsive layouts for devices</li>
          <li>Adding animations and transitions</li>
          <li>Building interactive UI components</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-8">
        <p>Created with ❤️ for first-year students to master CSS.</p>
      </footer>
    </div>
  );
};

export default CssNotes;
