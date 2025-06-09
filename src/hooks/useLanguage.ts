
import { useState, useEffect } from 'react';
import { Language } from '@/types';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ru';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang);
  };

  return { language, changeLanguage };
};
