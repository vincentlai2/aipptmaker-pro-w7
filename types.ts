export interface Slide {
  id: string;
  title: string;
  content: string[]; // Bullet points
  imagePrompt?: string; // For generating/fetching an image
  layout: 'title' | 'bullet_left' | 'bullet_right' | 'center' | 'quote';
}

export interface Presentation {
  topic: string;
  title: string;
  slides: Slide[];
  theme: 'modern' | 'minimal' | 'creative' | 'corporate';
}

export enum AppState {
  LANDING = 'LANDING',
  GENERATOR = 'GENERATOR'
}

export enum GeneratorStep {
  INPUT = 'INPUT',
  OUTLINE = 'OUTLINE',
  EDITING = 'EDITING',
  EXPORT = 'EXPORT'
}
