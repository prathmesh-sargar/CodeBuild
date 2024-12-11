// App.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
        console.log(data);
        
      const response = await axios.post(
        'https://docs.google.com/spreadsheets/d/1C-e8rvHtZXdVETks7bVqWjXt-kwalRsm-oksIyl5XUk/edit?usp=sharing',
        data
      );
      console.log('Response:', response.data);
      alert('Form submitted successfully!');
      reset(); // Reset the form fields
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.',error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-black"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Submit Your Details
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Branch - Div Field */}
        <div className="mb-4">
          <label htmlFor="branchDiv" className="block text-gray-700 font-medium mb-2">
            Branch - Div
          </label>
          <input
            type="text"
            id="branchDiv"
            {...register('branchDiv', { required: 'Branch - Div is required' })}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.branchDiv ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.branchDiv && (
            <p className="text-red-500 text-sm mt-1">
              {errors.branchDiv.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            {...register('message', { required: 'Message is required' })}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
