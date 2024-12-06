import { FloatingLabel, Button } from 'flowbite-react';
import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-[90%] max-w-md flex flex-col rounded-lg shadow-lg bg-white p-8">
        <div className="flex flex-col items-center mb-8">
          {/* Add a pet-themed logo here */}
          <div className="bg-red-500 p-4 rounded-full">
            <span role="img" aria-label="paw print" className="text-3xl text-white">
              🐾
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-700 mt-4">Welcome Back!</h1>
          <p className="text-gray-500 text-center mt-2">
            Login to manage your pet adoption profile.
          </p>
        </div>

        <div className="mt-4">
          <FloatingLabel variant="standard" label="Username" className="w-full" />
        </div>
        <div className="mt-4">
          <FloatingLabel variant="standard" label="Password" className="w-full" />
        </div>

        <Button type="submit" color="red" className="mt-6 w-full">
          Login
        </Button>

        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
          <a href="/signup" className="hover:underline">
            Create an Account
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
