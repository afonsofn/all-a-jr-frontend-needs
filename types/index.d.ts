declare global {
  interface WelcomeContent {
    title: string;
    description: string;
    importantTips: string;
  }

  interface NextStepsContent {
    title: string;
    description: string;
  }

  interface LessonContent {
    title: string;
    steps: any[];
  }
}

export { WelcomeContent, NextStepsContent, LessonContent };
