import { Response } from "miragejs";

/**
 * This handler handles gets leaderboard in the db.
 * send GET Request at /api/leaderboard
 * */

export const getLeaderboard = function () {
  return new Response(200, {}, { leaderboard: this.db.leaderboards });
};
