import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  getAllQuizHandler,
  getQuizByIdHandler,
} from "./backend/controllers/QuizController";
import { getAllCategoriesHandler } from "./backend/controllers/CategoryController";
import { getLeaderboard } from "./backend/controllers/leaderboard";

import { users } from "./backend/db/users";
import { quizzes } from "./backend/db/quizzes";
import { leaderboard } from "./backend/db/leaderboard";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      quiz: Model,
      user: Model,
      leaderboard: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;

      users.forEach((item) => server.create("user", { ...item }));
      quizzes.forEach((item) => server.create("quiz", { ...item }));
      leaderboard.forEach((item) => server.create("leaderboard", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));

      // leaderboard route (public)
      this.get("/leaderboard", getLeaderboard.bind(this));

      // quiz routes (private)
      this.get("/quiz", getAllQuizHandler.bind(this));
      this.get("/quiz/:quizId", getQuizByIdHandler.bind(this));
    },
  });
}
