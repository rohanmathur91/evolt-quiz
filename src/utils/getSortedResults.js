export const getSortedResults = (results) => {
  return [...results].sort(
    (a, b) =>
      b.totalScore - a.totalScore ||
      new Date(b.createdAt) - new Date(a.createdAt)
  );
};
