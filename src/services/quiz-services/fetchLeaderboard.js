import axios from "axios";
import { SET_LEADERBOARD } from "../../reducers";
import { encodedToken } from "../../token";

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
      headers: { authorization: encodedToken },
    });

    quizDispatch({ type: SET_LEADERBOARD, payload: results });
    setIsLoading(false);
  } catch (error) {
    showToast("error", "Cannot fetch the leaderboard!");
  }
};
