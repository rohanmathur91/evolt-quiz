import axios from "axios";
import { SET_LEADERBOARD } from "../../reducers";
import { encodedToken } from "../../token";

export const saveResultService = async ({
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
          username: "Adarsh Balika",
          category: selectedCategory,
        },
      },
      {
        headers: { authorization: encodedToken },
      }
    );

    quizDispatch({ type: SET_LEADERBOARD, payload: results });
  } catch (error) {
    showToast("error", "Cannot save result, something went wrong!");
  }
};
