export const getTotalScore = (quiz) => {
  return quiz.reduce(
    (totalScore, { score }) => (score ? totalScore + score : totalScore),
    0
  );
};
