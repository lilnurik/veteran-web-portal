
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
    <div className="flex flex-col sm:flex-row gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "outline"}
          size="lg"
          onClick={() => changeLanguage(lang.code)}
          className="text-base lg:text-lg px-4 py-3 min-w-[120px] justify-center"
        >
          <span className="mr-2">{lang.flag}</span>
          {lang.name}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
