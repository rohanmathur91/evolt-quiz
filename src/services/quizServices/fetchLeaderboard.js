import axios from "axios";
import { SET_LEADERBOARD } from "../../reducers";

export const fetchLeaderboard = async ({
  showToast,
  setIsLoading,
  quizDispatch,
}) => {
  try {
    setIsLoading(true);
    const {
      data: { results },
    } = await axios.get("/api/results", {
      headers: { authorization: localStorage.getItem("evoltQuizToken") },
    });

    quizDispatch({ type: SET_LEADERBOARD, payload: results });
    setIsLoading(false);
  } catch (error) {
    showToast("error", "Cannot fetch the leaderboard!");
  }
};
