// score.ts
import { Question } from './questions.js';

export function calculateScore(questions: Question[], userAnswers: any) {
  let score = 0;

  questions.forEach((question, index) => {
    if (userAnswers[`question_${index}`] === question.correctAnswer) {
      score++;
    }
  });

  return score;
}
