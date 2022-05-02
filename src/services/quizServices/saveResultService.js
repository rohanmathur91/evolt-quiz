import axios from "axios";
import { SET_LEADERBOARD } from "../../reducers";

export const saveResultService = async ({
  user,
  showToast,
  totalScore,
  selectedCategory,
  quizDispatch,
}) => {
  try {
    const {
      data: { results },
    } = await axios.post(
      "/api/results",
      {
        result: {
          totalScore,
          userId: user._id,
          username: user.fullName,
          category: selectedCategory,
        },
      },
      {
        headers: { authorization: localStorage.getItem("evoltQuizToken") },
      }
    );

    quizDispatch({ type: SET_LEADERBOARD, payload: results });
  } catch (error) {
    showToast("error", "Cannot save result, something went wrong!");
  }
};
