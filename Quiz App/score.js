export function calculateScore(questions, userAnswers) {
    let score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[`question_${index}`] === question.correctAnswer) {
            score++;
        }
    });
    return score;
}
