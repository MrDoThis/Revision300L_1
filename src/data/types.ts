export interface FrequencyItem {
  topic: string;
  frequency: string; // e.g. "8/10 Sets (80%)"
  probability: 'VERY HIGH' | 'HIGH' | 'MODERATE';
  examinerFocus: string;
  likelyQuestions: string[];
  memoryAnchor: string;
}

export interface ModuleQuestion {
  id: string;
  question: string;
  frequencyTag?: string; // e.g. "70% High Frequency"
  answerHtml: string;
  mnemonic?: string;
  keyTakeaways: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  questions: ModuleQuestion[];
}

export interface ExamQuestion {
  number: string;
  title: string;
  marks: string;
  isCompulsory?: boolean;
  questionText: string;
  frequencyNote: string;
  modelAnswerHtml: string;
  mnemonic?: string;
  scoringGuide: string[];
}

export interface ComparativeTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface CourseData {
  code: string;
  title: string;
  creditUnits: number;
  timeAllowed: string;
  examInstructions: string;
  overview: string;
  frequencyAnalysis: {
    summary: string;
    totalSetsAnalyzed: number;
    matrix: FrequencyItem[];
  };
  modules: CourseModule[];
  tables?: ComparativeTable[];
  diagrams?: { title: string; content: string }[];
  practiceExam: {
    heading: string;
    instructions: string;
    questions: ExamQuestion[];
  };
  memorizationAids: {
    title: string;
    items: { acronym: string; standsFor: string; usage: string }[];
  };
}
