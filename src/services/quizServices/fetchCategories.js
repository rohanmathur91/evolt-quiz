import axios from "axios";
import { SET_CATEGORIES } from "../../reducers";

export const fetchCategories = async ({ showToast, quizDispatch }) => {
  try {
    const {
      data: { categories },
    } = await axios.get("/api/categories");

    quizDispatch({ type: SET_CATEGORIES, payload: categories });
  } catch (error) {
    showToast("error", "Could not fetch the categories!");
  }
};
