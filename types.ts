export enum ModuleType {
  LESEN = 'LESEN',
  SPRACHBAUSTEINE = 'SPRACHBAUSTEINE',
  HOEREN = 'HOEREN', 
  SCHREIBEN = 'SCHREIBEN',
  WORTSCHATZ = 'WORTSCHATZ' // Added
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE', 
  MATCHING = 'MATCHING',
  TEXT_INPUT = 'TEXT_INPUT', 
  ESSAY = 'ESSAY' 
}

export interface Question {
  id: string;
  type?: QuestionType; 
  text: string; 
  options?: string[]; 
  correctAnswer?: string;
  contextText?: string; 
  audioUrl?: string;
  structureHelp?: string; 
  explanation?: string; 
  points?: number; 
  part?: string; 
}

export interface Exercise {
  id: string;
  title: string;
  module: ModuleType;
  subType?: string; 
  instruction: string;
  questions: Question[];
}

export interface UserProgress {
  totalScore: number;
  completedExercises: string[];
  weaknesses: string[]; 
}

export interface AIExplanation {
  isCorrect: boolean;
  explanation: string;
  grammarTopic: string;
  betterAlternative?: string;
}

export interface EssayCorrection {
    correctedText: string;
    feedback: string[]; 
    rating: string; 
    grammarScore: number; 
}

// Vocabulary Interface
export interface VocabularyItem {
    id: string;
    original: string;
    translation: string;
    type: 'Wort' | 'Ausdruck' | 'Grammatik';
    dateAdded: string;
}