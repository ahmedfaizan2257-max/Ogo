export interface CaseImage {
  id: string;
  title: string;
  description: string;
  url: string;
  fallbackText?: string;
}

export interface ClientCase {
  id: number;
  name: string;
  subtitle: string;
  diagnosis: string;
  treatment: string;
  appointments: number;
  completed: boolean;
  coverImage?: string;
  images: CaseImage[];
  beforeAfter?: {
    beforeUrl: string;
    afterUrl: string;
    beforeDesc: string;
    afterDesc: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
