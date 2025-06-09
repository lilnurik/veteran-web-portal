
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/types';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => changeLanguage(lang.code)}
          className="text-base md:text-lg px-3 py-2 md:px-4 md:py-3"
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.name}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
