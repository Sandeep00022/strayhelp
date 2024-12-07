import React from "react";
import { Button } from "flowbite-react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-red-500">Stray Help</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          At <span className="font-semibold">Stray Help</span>, we believe that every animal deserves a loving home.
          Our mission is to connect compassionate people with stray animals in need of adoption, care, and attention.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl w-full px-4">
        {/* Feature 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <div className="bg-red-100 text-red-500 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v8m4-4H8m5-9a7 7 0 110 14 7 7 0 010-14z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Find Your Companion</h3>
          <p className="text-gray-600 text-center">
            Easily browse profiles of animals available for adoption in your area and find your perfect companion.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <div className="bg-green-100 text-green-500 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.24 7.76a5 5 0 010 8.48M9.76 16.24a5 5 0 010-8.48m5.48-5.48a7.75 7.75 0 110 11.08M8.52 19.48A7.75 7.75 0 118.52 4.52"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Promote Animal Welfare</h3>
          <p className="text-gray-600 text-center">
            Join our community to support stray animals by providing care, temporary shelters, or donations.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <div className="bg-blue-100 text-blue-500 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.93 19.07a10 10 0 0114.14 0M12 8a3.999 3.999 0 100 8 3.999 3.999 0 000-8zm0 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Support the Community</h3>
          <p className="text-gray-600 text-center">
            Collaborate with like-minded individuals and organizations to make a lasting impact.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-gray-600 mb-6">
          Whether you’re here to adopt, volunteer, or donate, your support helps create a better future for stray animals.
        </p>
        <Button color="red" href="/signup">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
