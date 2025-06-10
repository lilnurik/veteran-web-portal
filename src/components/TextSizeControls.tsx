
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Minus, Plus, Type } from 'lucide-react';

const TextSizeControls = () => {
  const { language } = useLanguage();
  const [fontSize, setFontSize] = useState(18);

  useEffect(() => {
    const saved = localStorage.getItem('fontSize');
    if (saved) {
      const size = parseInt(saved);
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}px`;
    }
  }, []);

  const changeFontSize = (newSize: number) => {
    const size = Math.max(16, Math.min(28, newSize));
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}px`;
    localStorage.setItem('fontSize', size.toString());
  };

  return (
    <div className="flex items-center gap-3 bg-accent/10 rounded-lg p-2">
      <Type className="w-5 h-5 text-accent" />
      <Button
        variant="outline"
        size="sm"
        onClick={() => changeFontSize(fontSize - 2)}
        disabled={fontSize <= 16}
        className="h-10 w-10 p-0"
      >
        <Minus className="w-4 h-4" />
      </Button>
      <span className="text-sm font-medium min-w-[60px] text-center bg-white px-3 py-1 rounded border">
        {fontSize}px
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => changeFontSize(fontSize + 2)}
        disabled={fontSize >= 28}
        className="h-10 w-10 p-0"
      >
        <Plus className="w-4 h-4" />
      </Button>
      <span className="text-sm text-muted-foreground hidden sm:block">
        {t('increaseText', language)}
      </span>
    </div>
  );
};

export default TextSizeControls;
