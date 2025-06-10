
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';

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
    <div className="flex gap-2 items-center">
      <Button
        variant="outline"
        size="sm"
        onClick={() => changeFontSize(fontSize - 2)}
        disabled={fontSize <= 14}
        className="text-base px-3 py-2"
      >
        A-
      </Button>
      <span className="text-sm text-muted-foreground">{fontSize}px</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => changeFontSize(fontSize + 2)}
        disabled={fontSize >= 24}
        className="text-base px-3 py-2"
      >
        A+
      </Button>
      <span className="text-sm text-muted-foreground ml-2">
        {t('increaseText', language)}
      </span>
    </div>
  );
};

export default TextSizeControls;
