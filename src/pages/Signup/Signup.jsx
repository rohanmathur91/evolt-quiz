import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import {
  useToast,
  useAuthForm,
  useScrollToTop,
  useDocumentTitle,
} from "../../hooks";
import { signupService } from "../../services";
import { signupErrorReducer, signUpErrorInitialState } from "../../reducers";
import { validateSignupForm } from "../../utils";
import { Input } from "../../components";

export const Signup = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const {
    loading,
    showPassword,
    credentials,
    handleShowPassword,
    handleInputChange,
    authFormDispatch,
  } = useAuthForm({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });

  const [errorState, errorDispatch] = useReducer(
    signupErrorReducer,
    signUpErrorInitialState
  );
  const { showToast } = useToast();

  useScrollToTop();
  useDocumentTitle("Signup");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValidForm = validateSignupForm({ credentials, errorDispatch });

    if (isValidForm) {
      signupService({
        setUser,
        navigate,
        showToast,
        credentials,
        errorDispatch,
        authFormDispatch,
      });
    }
  };

  return (
    <main className="max-container main-container flex-row flex-center">
      <form
        onSubmit={handleFormSubmit}
        className="signup-form w-100 py-2 px-4 m-2 card-shadow rounded-sm"
      >
        <h3 className="text-center mt-2 mb-3">Signup to Evolt-Quiz</h3>

        <Input
          id="fullName"
          type="text"
          title="Full Name"
          placeholder="Enter your full name"
          value={credentials.fullName}
          error={errorState.fullName}
          inputHandler={handleInputChange}
          handleOnFocus={() =>
            errorDispatch({ type: "SET_SIGNUP_FULLNAME_ERROR", payload: "" })
          }
        />

        <Input
          id="email"
          type="email"
          title="Email address"
          placeholder="Enter your email"
          value={credentials.email}
          error={errorState.email}
          inputHandler={handleInputChange}
          handleOnFocus={() =>
            errorDispatch({ type: "SET_SIGNUP_EMAIL_ERROR", payload: "" })
          }
        />

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            title="Password"
            value={credentials.password}
            error={errorState.password}
            placeholder="Enter your password"
            inputHandler={handleInputChange}
            handleOnFocus={() =>
              errorDispatch({ type: "SET_SIGNUP_PASSWORD_ERROR", payload: "" })
            }
          />
          {
            <span
              onClick={handleShowPassword}
              className="material-icons-outlined cursor-pointer visibility-icon"
            >
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          }
        </div>

        <Input
          id="confirmPassword"
          type="password"
          title="Confirm Password"
          value={credentials.confirmPassword}
          error={errorState.confirmPassword}
          placeholder="Re-enter your password"
          inputHandler={handleInputChange}
          handleOnFocus={() =>
            errorDispatch({
              type: "SET_SIGNUP_CONFIRM_PASSWORD_ERROR",
              payload: "",
            })
          }
        />

        <button
          disabled={loading}
          className="cta primary-cta btn-form w-100 font-semibold transition-2 mb-2 rounded-sm"
        >
          {loading ? "Signup..." : "Signup"}
        </button>

        {errorState.formError && (
          <div className="login-error-msg flex-row items-center text-sm">
            <span className="material-icons-outlined mr-1">error_outline</span>
            <p>{errorState.formError}</p>
          </div>
        )}

        <div className="sub-title mb-2 flex-row flex-center">
          Already a user?
          <Link to="/login" className="flex-row flex-center ml-1">
            <span className="font-semibold text-sm underline">Login</span>
            <span className="material-icons-outlined redirect-icon">
              arrow_right
            </span>
          </Link>
        </div>
      </form>
    </main>
  );
};
