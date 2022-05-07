import axios from "axios";
import { SET_LOADING } from "../../reducers";

export const loginService = async ({
  setUser,
  setError,
  location,
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

    const { _id, email, fullName } = foundUser;

    setUser({ _id, email, fullName });
    localStorage.setItem("evoltQuizToken", encodedToken);
    localStorage.setItem("evoltQuizUser", JSON.stringify(foundUser));

    showToast("success", "You logged in successfully");
    authFormDispatch({ type: SET_LOADING, payload: false });

    navigate(location.state?.from?.pathname ?? "/", { replace: true });
  } catch (error) {
    setError("Email or password is incorrect");
    authFormDispatch({ type: SET_LOADING, payload: false });
  }
};
