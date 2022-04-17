export const getTotalScore = (quiz) =>
  quiz.reduce(
    (totalScore, { score }) => (score ? totalScore + score : totalScore),
    0
  );
