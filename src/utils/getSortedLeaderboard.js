export const getSortedLeaderboard = (leaderboard) =>
  [...leaderboard].sort((a, b) => b.totalScore - a.totalScore);
