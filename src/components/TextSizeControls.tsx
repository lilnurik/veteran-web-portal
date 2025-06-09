
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Minus, Plus, Type } from 'lucide-react';

const TextSizeControls = () => {
  const { language } = useLanguage();
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const saved = localStorage.getItem('fontSize');
    if (saved) {
      const size = parseInt(saved);
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}px`;
    }
  }, []);

  const changeFontSize = (newSize: number) => {
    const size = Math.max(14, Math.min(24, newSize));
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}px`;
    localStorage.setItem('fontSize', size.toString());
  };

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
      <Type className="w-4 h-4 text-white opacity-75 hidden sm:block" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeFontSize(fontSize - 2)}
        disabled={fontSize <= 14}
        className="h-8 w-8 p-0 text-white hover:bg-white/20 disabled:opacity-50"
      >
        <Minus className="w-4 h-4" />
      </Button>
      <span className="text-xs text-white/75 min-w-[35px] text-center">
        {fontSize}px
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeFontSize(fontSize + 2)}
        disabled={fontSize >= 24}
        className="h-8 w-8 p-0 text-white hover:bg-white/20 disabled:opacity-50"
      >
        <Plus className="w-4 h-4" />
      </Button>
      <span className="text-xs text-white/75 hidden lg:block ml-1">
        Размер шрифта
      </span>
    </div>
  );
};

export default TextSizeControls;
