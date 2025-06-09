
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
    <div className="flex gap-2 flex-wrap">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "secondary" : "ghost"}
          size="sm"
          onClick={() => changeLanguage(lang.code)}
          className="text-sm lg:text-base px-3 py-2 min-h-[40px] bg-white/10 hover:bg-white/20 text-white border-white/20"
        >
          <span className="mr-1 text-base">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.name}</span>
          <span className="sm:hidden">{lang.code.toUpperCase()}</span>
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
