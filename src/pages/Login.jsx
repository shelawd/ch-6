import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import GoogleLogin from "../components/GoogleLogin";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    if (e) {
      if (e.target.id === "email") setEmail(e.target.value);
      if (e.target.id === "password") setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      email,
      password,
    });
    dispatch(login(data, navigate));
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mx-auto mt-10">
  <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
  <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter your email"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
          placeholder="Enter your password"
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="h-6 w-6 text-gray-700"
          />
        </button>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Login
      </button>
    </div>
    <div className="mt-4 border-b text-center">
      <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2">
        Or continue with
      </div>
    </div>
    <div className="mt-4">
      <GoogleLogin buttonText="Login with Google 🚀" />
    </div>
  </form>
  <p className="text-center text-sm text-gray-500">
    Don't have an account?{" "}
    <a
      href="#!"
      onClick={handleRegister}
      className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
    >
      Sign up
    </a>
  </p>
</div>

  );
}

export default Login;
