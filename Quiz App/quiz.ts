// quiz.ts
import inquirer from 'inquirer';
import { questions } from './questions.js';
import { calculateScore } from './score.js';

export async function startQuiz() {
  const answers = await inquirer.prompt(questions);
  const score = calculateScore(questions, answers);

  console.log(`Your score: ${score}/${questions.length}`);
}
