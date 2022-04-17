import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  getAllQuizHandler,
  getQuizByIdHandler,
} from "./backend/controllers/QuizController";
import {
  addResult,
  getResults,
  getUserResults,
} from "./backend/controllers/ResultController";
import { getAllCategoriesHandler } from "./backend/controllers/CategoryController";

import { users } from "./backend/db/users";
import { quizzes } from "./backend/db/quizzes";
import { results } from "./backend/db/results";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      quiz: Model,
      user: Model,
      result: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;

      users.forEach((item) => server.create("user", { ...item }));
      quizzes.forEach((item) => server.create("quiz", { ...item }));
      results.forEach((item) => server.create("result", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));

      // results route (private)
      this.post("/results", addResult.bind(this));
      this.get("/results", getResults.bind(this));
      this.get("/results/:userId", getUserResults.bind(this));

      // quiz routes (private)
      this.get("/quiz", getAllQuizHandler.bind(this));
      this.get("/quiz/:quizId", getQuizByIdHandler.bind(this));
    },
  });
}
