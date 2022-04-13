import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

export const getAllQuizHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  try {
    return new Response(200, {}, { quizzes: schema.db.quizzes });
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

export const getQuizByIdHandler = function (schema, request) {
  const quizId = request.params.quizId;
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const quiz = schema.quizzes.findBy({ _id: quizId });
  return new Response(200, {}, { quiz });
};
