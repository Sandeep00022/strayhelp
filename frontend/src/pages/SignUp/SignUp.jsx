"use client";
import React, { useState } from "react";
import { FloatingLabel, Button, Alert, Spinner } from "flowbite-react";
import {useNavigate} from 'react-router-dom'
import apiClient from "../../utils/apiClient";
const SignUp = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Gather form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      location,
    };

    //  put form validation
    if (!formData.name || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    setLoading(true)
    try {
      let res = await apiClient.post('/auth/signup',formData)
      if (!res.ok) {
        setLoading(false)
        throw new Error(res.message);
      }
      setLoading(false)
      navigate('/dashboard')
    } catch (error) {
      setLoading(false)
      setErrorMessage(error?.response?.data?.message);
    }
  };

  console.log("errorMessage", errorMessage);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-[90%] max-w-lg flex flex-col rounded-lg shadow-lg bg-black p-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center mb-8">
          {/* Logo or header */}
          <div className="bg-red-500 p-4 rounded-full">
            <span
              role="img"
              aria-label="paw print"
              className="text-3xl text-white"
            >
              🐾
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-400 mt-4">
            Join the Community
          </h1>
          <p className="text-gray-500 text-center mt-2">
            Create your account to start helping animals find homes.
          </p>
        </div>

        {/* Full Name */}
        <div className="mt-4">
          <FloatingLabel
            name="name"
            variant="standard"
            label="Full Name"
            required
            className="w-full
           text-black"
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <FloatingLabel
            name="email"
            variant="standard"
            label="Email Address"
            type="email"
            required
            className="w-full"
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
          <Button
            type="button"
            color="gray"
            onClick={getLocation}
            className="w-full"
          >
            {location.latitude && location.longitude
              ? `Location Captured (${location.latitude}, ${location.longitude})`
              : "Capture Location"}
          </Button>
        </div>

        {/* Signup Button */}
        <Button type="submit" color="red" className="mt-6 w-full">
          {loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            "Sign Up"
          )}
        </Button>

        {/* Login Redirect */}
        <div className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Login Here
          </a>
        </div>
      </form>
      {errorMessage && (
        <Alert className="mt-5 w-[50%] text-center" color={"failure"}>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default SignUp;
