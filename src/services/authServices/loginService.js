import axios from "axios";
import { SET_LOADING } from "../../reducers";

export const loginService = async ({
  setError,
  navigate,
  showToast,
  credentials,
  authFormDispatch,
}) => {
  try {
    setError("");
    authFormDispatch({ type: SET_LOADING, payload: true });
    const {
      data: { foundUser, encodedToken },
    } = await axios.post("/api/auth/login", credentials);

    console.log(foundUser);
    localStorage.setItem("evoltQuizToken", encodedToken);
    showToast("success", "You logged in successfully");
    authFormDispatch({ type: SET_LOADING, payload: false });
    navigate("/");
  } catch (error) {
    setError("Email or password is incorrect");
    authFormDispatch({ type: SET_LOADING, payload: false });
  }
};
