import React, { useState } from "react";
import { FloatingLabel, Button } from "flowbite-react";

const SignUp = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });

  // Get user's location using Geolocation API
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to fetch location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gather form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      location,
    };

    console.log("Form Data:", formData);
    // Send formData to the backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-[90%] max-w-lg flex flex-col rounded-lg shadow-lg bg-white p-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center mb-8">
          {/* Logo or header */}
          <div className="bg-red-500 p-4 rounded-full">
            <span role="img" aria-label="paw print" className="text-3xl text-white">
              🐾
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-700 mt-4">Join the Community</h1>
          <p className="text-gray-500 text-center mt-2">
            Create your account to start helping animals find homes.
          </p>
        </div>

        {/* Full Name */}
        <div className="mt-4">
          <FloatingLabel name="name" variant="standard" label="Full Name" required className="w-full text-gray-700" />
        </div>

        {/* Email */}
        <div className="mt-4">
          <FloatingLabel
            name="email"
            variant="standard"
            label="Email Address"
            type="email"
            required
            className="w-full text-gray-900"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <FloatingLabel
            name="password"
            variant="standard"
            label="Password"
            type="password"
            required
            minLength={6}
            className="w-full text-gray-700"
          />
        </div>

        {/* Location */}
        <div className="mt-4">
          <Button type="button" color="gray" onClick={getLocation} className="w-full">
            {location.latitude && location.longitude
              ? `Location Captured (${location.latitude}, ${location.longitude})`
              : "Capture Location"}
          </Button>
        </div>

        {/* Signup Button */}
        <Button type="submit" color="red" className="mt-6 w-full">
          Sign Up
        </Button>

        {/* Login Redirect */}
        <div className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Login Here
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
