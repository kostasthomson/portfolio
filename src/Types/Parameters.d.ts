interface ProjectContent {
  title: string;
  description: string;
  technologies: string[];
  url: string;
}

export type ContentType = { links?: boolean } & { projects?: ProjectContent[] };

export interface ConversationType {
  answer: string;
  sleepTime: number;
  question?: string;
  content?: ContentType;
}
