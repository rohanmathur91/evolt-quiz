import axios from "axios";
import { SET_USER_RESULTS } from "../../reducers";

export const fetchUserResults = async ({
  user,
  showToast,
  setIsLoading,
  quizDispatch,
}) => {
  try {
    setIsLoading(true);
    const { data: results } = await axios.get(`api/results/${user._id}`, {
      headers: { authorization: localStorage.getItem("evoltQuizToken") },
    });

    quizDispatch({ type: SET_USER_RESULTS, payload: results });
    setIsLoading(false);
  } catch (error) {
    showToast("error", "Something went wrong!");
  }
};
