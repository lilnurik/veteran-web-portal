
import * as pdfjsLib from 'pdfjs-dist';

// Настройка воркера для PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export interface VeteranData {
  name: string;
  rank?: string;
  region?: string;
  unit?: string;
  service?: string;
  page: number;
  rawText: string;
}

export const parsePdfFile = async (file: File): Promise<VeteranData[]> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const veterans: VeteranData[] = [];

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(' ');

      // Простой парсинг - каждая строка может содержать данные ветерана
      const lines = pageText.split('\n').filter(line => line.trim().length > 0);
      
      lines.forEach(line => {
        if (line.trim().length > 10) { // Минимальная длина для данных ветерана
          veterans.push({
            name: extractName(line),
            rank: extractRank(line),
            region: extractRegion(line),
            unit: extractUnit(line),
            service: extractService(line),
            page: pageNum,
            rawText: line.trim()
          });
        }
      });
    }

    return veterans;
  } catch (error) {
    console.error('Ошибка при парсинге PDF:', error);
    throw new Error('Не удалось обработать PDF файл');
  }
};

// Функции для извлечения данных из текста
const extractName = (text: string): string => {
  // Поиск ФИО (простой паттерн)
  const nameMatch = text.match(/([А-Я][а-я]+\s+[А-Я][а-я]+\s+[А-Я][а-я]+)/);
  return nameMatch ? nameMatch[1] : text.split(' ').slice(0, 3).join(' ');
};

const extractRank = (text: string): string | undefined => {
  const ranks = ['рядовой', 'ефрейтор', 'младший сержант', 'сержант', 'старший сержант', 
                'старшина', 'прапорщик', 'старший прапорщик', 'младший лейтенант', 
                'лейтенант', 'старший лейтенант', 'капитан', 'майор', 'подполковник', 'полковник'];
  
  const lowerText = text.toLowerCase();
  return ranks.find(rank => lowerText.includes(rank));
};

const extractRegion = (text: string): string | undefined => {
  const regions = ['область', 'край', 'республика', 'округ'];
  const words = text.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    if (regions.some(region => words[i].toLowerCase().includes(region))) {
      return words.slice(Math.max(0, i-1), i+1).join(' ');
    }
  }
  return undefined;
};

const extractUnit = (text: string): string | undefined => {
  const unitMatch = text.match(/(\d+[-\s]?(я|ая|ой|ый)?\s?(дивизия|полк|батальон|рота|взвод))/i);
  return unitMatch ? unitMatch[1] : undefined;
};

const extractService = (text: string): string | undefined => {
  const serviceMatch = text.match(/(\d{4}[-–]\d{4})/);
  return serviceMatch ? serviceMatch[1] : undefined;
};

export const searchVeterans = (veterans: VeteranData[], query: string): VeteranData[] => {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return veterans.filter(veteran => {
    const searchableText = [
      veteran.name,
      veteran.rank,
      veteran.region,
      veteran.unit,
      veteran.service,
      veteran.rawText
    ].join(' ').toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
};
