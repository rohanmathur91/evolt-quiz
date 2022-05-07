import axios from "axios";
import { SET_LOADING, SET_SIGNUP_FORM_ERROR } from "../../reducers";

export const signupService = async ({
  setUser,
  navigate,
  showToast,
  credentials,
  errorDispatch,
  authFormDispatch,
}) => {
  try {
    authFormDispatch({ type: SET_LOADING, payload: true });
    errorDispatch({ type: SET_SIGNUP_FORM_ERROR, payload: "" });

    const {
      data: { createdUser, encodedToken },
    } = await axios.post("/api/auth/signup", credentials);

    const { _id, email, fullName } = createdUser;

    setUser({ _id, email, fullName });
    localStorage.setItem("evoltQuizToken", encodedToken);
    localStorage.setItem("evoltQuizUser", JSON.stringify(createdUser));

    authFormDispatch({ type: SET_LOADING, payload: false });
    showToast("success", "You signup successfully.");
    navigate("/");
  } catch (error) {
    errorDispatch({
      type: SET_SIGNUP_FORM_ERROR,
      payload:
        error?.response?.status === 422
          ? "Email already exists."
          : "Something is wrong, please try later.",
    });

    authFormDispatch({ type: SET_LOADING, payload: false });
  }
};
