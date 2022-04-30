export const getSortedResults = (leaderboard) => {
  return [...leaderboard].sort((a, b) => b.totalScore - a.totalScore);
};
