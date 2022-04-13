import { Response } from "miragejs";

/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/categories
 * */

export const getAllCategoriesHandler = function () {
  try {
    const categories = this.db.quizzes.map(
      ({ _id, alt, image, numberOfquestions, category, title }) => ({
        _id,
        alt,
        image,
        title,
        category,
        numberOfquestions,
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
