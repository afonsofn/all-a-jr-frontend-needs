declare global {
  interface WelcomeContent {
    title: string;
    description: string;
    importantTips: string;
  }

  interface LessonContent {
    title: string;
    steps: any[];
    exercises?: { answer: string, question: string }[];
  }
}

export { WelcomeContent, LessonContent };
