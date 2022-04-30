import { Response } from "miragejs";

export const getAllCategoriesHandler = function () {
  try {
    const categories = this.db.quizzes.map(
      ({ _id, alt, image, quiz, category, title }) => ({
        _id,
        alt,
        image,
        title,
        category,
        numberOfquestions: quiz.length,
      })
    );

    return new Response(200, {}, { categories });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
