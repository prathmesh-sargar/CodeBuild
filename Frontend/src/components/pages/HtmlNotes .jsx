import React from 'react';

const HtmlNotes = () => {
  return (
    <div className="bg-purple-50 min-h-screen py-10 px-4 sm:px-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800">
          Mastering HTML: The Building Block of the Web
        </h1>
        <p className="mt-2 text-lg text-purple-600">
          An engaging guide for beginners to understand and use HTML in real-world applications.
        </p>
      </header>

      {/* Stages of HTML Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Stages of HTML</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-purple-800 mb-2">1. Structure</h3>
            <p className="text-gray-700">
              Define the skeleton of the webpage using basic tags like <code>&lt;html&gt;</code>, 
              <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>. Use this stage for setting up a 
              well-structured document.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Page Layout</li>
              <li>Headers, Paragraphs, and Lists</li>
              <li>Basic SEO Setup</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-purple-800 mb-2">2. Content</h3>
            <p className="text-gray-700">
              Add meaningful content such as text, images, videos, and tables. This stage focuses on 
              user-facing elements.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Adding Media</li>
              <li>Interactive Forms</li>
              <li>Creating Tables</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-purple-800 mb-2">3. Styling and Layout</h3>
            <p className="text-gray-700">
              Integrate CSS to enhance visual appeal. Focus on creating a user-friendly and 
              aesthetic interface.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>CSS Integration</li>
              <li>Responsive Design</li>
              <li>Interactive Buttons</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-purple-800 mb-2">4. Advanced Features</h3>
            <p className="text-gray-700">
              Add modern features such as animations, semantic tags, and accessibility elements.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>ARIA Roles</li>
              <li>HTML5 Semantic Tags</li>
              <li>Integrating JavaScript</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Test Your HTML Knowledge</h2>
        <div className="p-6 bg-purple-100 shadow-lg rounded-lg">
          <p className="text-gray-800 mb-4">
            Answer this question: <strong>What tag is used to define the largest heading in HTML?</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
              A. &lt;h6&gt;
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
              B. &lt;h1&gt;
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
              C. &lt;head&gt;
            </button>
          </div>
        </div>
      </section>

      {/* Real-World Applications Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Applications of HTML</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Building static websites</li>
          <li>Creating email templates</li>
          <li>Prototyping applications</li>
          <li>Structuring dynamic content in web apps</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-8">
        <p>Created with ❤️ for first-year students to master web development.</p>
      </footer>
    </div>
  );
};

export default HtmlNotes;
