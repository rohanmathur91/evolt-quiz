import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useToast,
  useAuthForm,
  useScrollToTop,
  useDocumentTitle,
} from "../../hooks";
import { loginService } from "../../services";
import { SET_TEST_CREDENTIALS } from "../../reducers";
import { Input } from "../../components";

export const Login = () => {
  const [error, setError] = useState("");
  const {
    loading,
    showPassword,
    credentials,
    handleShowPassword,
    handleInputChange,
    authFormDispatch,
  } = useAuthForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { showToast } = useToast();

  useScrollToTop();
  useDocumentTitle("Login");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    loginService({
      setError,
      navigate,
      showToast,
      credentials,
      authFormDispatch,
    });
  };

  const handleTestCredentials = () => {
    authFormDispatch({
      type: SET_TEST_CREDENTIALS,
      payload: { email: "adarshbalika@gmail.com", password: "adarshbalika" },
    });
  };

  return (
    <main className="max-container main-container flex-row flex-center">
      <form
        onSubmit={handleFormSubmit}
        className="login-form py-2 px-4 w-100 card-shadow rounded-sm m-2"
      >
        <h3 className="text-center mt-2 mb-3">Login</h3>

        <Input
          id="email"
          type="email"
          title="Email address"
          value={credentials.email}
          placeholder="Enter your email"
          inputHandler={handleInputChange}
        />

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            title="Password"
            value={credentials.password}
            placeholder="Enter your password"
            inputHandler={handleInputChange}
          />
          {
            <span
              onClick={handleShowPassword}
              className="material-icons-outlined visibility-icon"
            >
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          }
        </div>

        <button
          disabled={loading}
          onClick={handleTestCredentials}
          className="outlined-btn btn-form w-100 font-semibold transition-2  mb-2 rounded-sm"
        >
          Try test credentials
        </button>

        <button
          disabled={loading}
          className="primary-cta btn-form w-100 font-semibold transition-2 mb-2 rounded-sm"
        >
          Login
        </button>

        {error && (
          <div className="login-error-msg flex-row items-center text-sm">
            <span className="material-icons-outlined mr-1">error_outline</span>
            <p>{error}</p>
          </div>
        )}

        <div className="sub-title mb-2 flex-row flex-center">
          New to Evolt-Quiz?
          <Link to="/signup" className="flex-row flex-center ml-1">
            <span className="font-semibold underline text-sm">Sign up now</span>
            <span className="material-icons-outlined redirect-icon">
              arrow_right
            </span>
          </Link>
        </div>
      </form>
    </main>
  );
};
