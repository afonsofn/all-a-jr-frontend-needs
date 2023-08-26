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
    steps: T[];
  }
  interface RoadmapSections {
    name: string;
    id: string;
    icon: Component;
    content: LessonContent[];
  }

  interface ContentTitles {
    welcome: string;
    importantTips: string;
    terminalAndGit: string;
    htmlAndCss: string;
    javascript: string;
    advancedCss: string;
    react: string;
    nextSteps: string;
  }

  type ContentKeys =
  | "welcome"
  | "terminalAndGit"
  | "htmlAndCss"
  | "javascript"
  | "advancedCss"
  | "react"
  | "nextSteps";
}

export { WelcomeContent, NextStepsContent, LessonContent, RoadmapSections, ContentTitles, ContentKeys };
