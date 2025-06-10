
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import TextSizeControls from './TextSizeControls';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Users, 
  Newspaper, 
  Phone, 
  HelpCircle, 
  BookOpen, 
  FileText, 
  Search,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { key: 'home', path: '/', icon: Home },
    { key: 'about', path: '/about', icon: Users },
    { key: 'news', path: '/news', icon: Newspaper },
    { key: 'contacts', path: '/contacts', icon: Phone },
    { key: 'faq', path: '/faq', icon: HelpCircle },
    { key: 'reference', path: '/reference', icon: BookOpen },
    { key: 'documents', path: '/documents', icon: FileText },
    { key: 'search', path: '/search', icon: Search }
  ];

  return (
    <header className="bg-white border-b-4 border-primary shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {/* Top controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <Home className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold text-primary leading-tight">
                  {t('welcome', language)}
                </h1>
                <p className="text-sm text-muted-foreground">Ветеранская организация</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto">
            <TextSizeControls />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden mb-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full justify-center gap-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            {isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          </Button>
        </div>

        {/* Navigation */}
        <nav className={`border-t pt-4 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-3">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link 
                  key={item.key} 
                  to={item.path} 
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button 
                    variant="ghost" 
                    className="w-full h-auto py-4 px-3 flex flex-col gap-2 text-center hover:bg-accent/10 hover:text-accent-foreground border border-transparent hover:border-accent/20 transition-all duration-200"
                  >
                    <IconComponent className="w-6 h-6 text-primary" />
                    <span className="text-sm lg:text-base font-medium leading-tight">
                      {t(item.key, language)}
                    </span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
