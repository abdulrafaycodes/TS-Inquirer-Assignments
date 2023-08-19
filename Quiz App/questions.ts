// questions.ts
export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    question: 'What does "TS" stand for in TypeScript?',
    options: ['TypeStrong', 'TypeScript', 'TypeSafe'],
    correctAnswer: 'TypeScript',
  },
  {
    question: 'TypeScript is a superset of?',
    options: ['JavaScript', 'Python', 'Java'],
    correctAnswer: 'JavaScript',
  },
  {
    question: 'What is a "decorator" in TypeScript?',
    options: ['A design pattern', 'A special type of function that modifies classes and their properties', 'A built-in TypeScript feature'],
    correctAnswer: 'A special type of function that modifies classes and their properties',
  },
  {
    question: 'Which TypeScript feature allows you to use the properties of one type in another type?',
    options: ['Interfaces', 'Generics', 'Classes'],
    correctAnswer: 'Interfaces',
  },
];
