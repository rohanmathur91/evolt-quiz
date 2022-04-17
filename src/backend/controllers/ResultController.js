import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

// get all the results
export const getResults = function (schema, request) {
  const isUserId = requiresAuth.call(this, request);
  if (!isUserId) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }

  return new Response(200, {}, { results: schema.db.results });
};

export const getUserResults = function (schema, request) {
  const userId = request.params.userId;
  const isUserId = requiresAuth.call(this, request);
  if (!isUserId) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const results = schema.db.results.filter(
    ({ userId: id }) => "" + id === userId
  );
  return new Response(200, {}, { results });
};

export const addResult = function (schema, request) {
  const isUserId = requiresAuth.call(this, request);
  if (!isUserId) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const { result } = JSON.parse(request.requestBody);
  schema.db.results.insert(result);
  return new Response(200, {}, { results: schema.db.results });
};
