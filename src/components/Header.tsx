
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import TextSizeControls from './TextSizeControls';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const Header = () => {
  const { language } = useLanguage();

  const menuItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'news', path: '/news' },
    { key: 'contacts', path: '/contacts' },
    { key: 'faq', path: '/faq' },
    { key: 'reference', path: '/reference' },
    { key: 'documents', path: '/documents' },
    { key: 'search', path: '/search' }
  ];

  return (
    <header className="bg-background border-b-2 border-primary shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Top controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-primary">
                {t('welcome', language)}
              </span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <TextSizeControls />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {menuItems.map((item) => (
              <Link key={item.key} to={item.path} className="w-full">
                <Button 
                  variant="ghost" 
                  className="w-full text-base md:text-lg py-3 md:py-4 px-2 h-auto text-center justify-center"
                >
                  {t(item.key, language)}
                </Button>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
