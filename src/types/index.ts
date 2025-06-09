
export interface NewsItem {
  id: string;
  title: Record<string, string>;
  content: Record<string, string>;
  date: string;
  image?: string;
  language: string;
}

export interface Document {
  id: string;
  title: Record<string, string>;
  type: 'law' | 'benefit' | 'license' | 'other';
  url: string;
  date: string;
}

export interface VeteranRecord {
  name: string;
  rank?: string;
  region?: string;
  unit?: string;
  [key: string]: any;
}

export type Language = 'ru' | 'uz' | 'en';
