import { FloatingLabel, Button, Alert, Spinner } from "flowbite-react";
import apiClient from "../../utils/apiClient";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useState } from "react";
import { signInStart, signInSuccess } from "../../redux/user/userSlice";
const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    setLoading(true)
    try {
      dispatch(signInStart());
      const res = await apiClient.post("/auth/login", formData);
       console.log("res",res);
      // Navigate to dashboard if login successful, else display error message 
      if(res?.statusText == "OK"){
        dispatch(signInSuccess(res.data))
        navigate("/dashboard");
        setLoading(false)
        }else{
          setLoading(false)
         setErrorMessage("Invalid email or password");
       }
    } catch (error) {
      setLoading(false)
      setErrorMessage(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-[90%] max-w-md flex flex-col rounded-lg shadow-lg bg-black p-8"
      >
        <div className="flex flex-col items-center mb-8">
          {/* Add a pet-themed logo here */}
          <div className="bg-red-500 p-4 rounded-full">
            <span
              role="img"
              aria-label="paw print"
              className="text-3xl text-white"
            >
              🐾
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-700 mt-4">
            Welcome Back!
          </h1>
          <p className="text-gray-500 text-center mt-2">
            Login to manage your pet adoption profile.
          </p>
        </div>

        <div className="mt-4">
          <FloatingLabel
            variant="standard"
            name="email"
            label="Username"
            className="w-full"
          />
        </div>
        <div className="mt-4">
          <FloatingLabel
            variant="standard"
            name="password"
            label="Password"
            className="w-full"
          />
        </div>

        <Button type="submit" color="red" className="mt-6 w-full">
        {loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            "Login"
          )}
        </Button>

        <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
          <a href="/signup" className="hover:underline text-white">
            Create an Account
          </a>
        </div>
      </form>
      {errorMessage && (<Alert color="failure" className="w-[50%] mt-8 text-center">{errorMessage}</Alert>)}
    </div>
  );
};

export default Login;
