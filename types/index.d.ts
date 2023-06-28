declare global {
  interface WelcomeContent {
    title: string;
    description: string;
    importantTips: string;
  }

  interface TerminalAndGitLessons {
    terminal: LessonContent;
    gitAndGitHub: LessonContent;
  }

  interface HtmlAndCssLessons {
    extra: LessonContent;
    fixationProjects: LessonContent;
    fundamentals: LessonContent;
    semanticHtml: LessonContent;
  }

  interface LessonContent {
    title: string;
    steps: LessonContent[];
    exercises?: { answer: string, question: string }[];
  }
}

export { WelcomeContent, TerminalAndGitLessons, HtmlAndCssLessons, LessonContent };
