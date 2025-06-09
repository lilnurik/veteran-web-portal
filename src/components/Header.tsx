
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import TextSizeControls from './TextSizeControls';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import { Home, Menu, X, Shield, Users, FileText, Search as SearchIcon, Phone, HelpCircle, Newspaper, BookOpen } from 'lucide-react';

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
    { key: 'search', path: '/search', icon: SearchIcon }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary to-accent shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
              </div>
              <div className="text-white">
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold leading-tight">
                  {t('welcome', language)}
                </h1>
                <p className="text-sm lg:text-base opacity-90 hidden sm:block">
                  Объединение защитников Родины
                </p>
              </div>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto">
            <TextSizeControls />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-white/20 pt-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 xl:grid-cols-8 gap-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link key={item.key} to={item.path} className="w-full">
                    <Button 
                      variant="ghost" 
                      className="w-full text-white hover:bg-white/20 hover:text-white btn-large flex flex-col gap-2 h-auto py-4"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="text-sm xl:text-base text-center leading-tight">
                        {t(item.key, language)}
                      </span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex justify-between items-center">
            <span className="text-white font-semibold text-lg">Меню</span>
            <Button
              variant="ghost"
              size="lg"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-white/20 p-3"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 animate-fade-in">
              <div className="grid grid-cols-2 gap-3">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link 
                      key={item.key} 
                      to={item.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full"
                    >
                      <Button 
                        variant="ghost" 
                        className="w-full text-white hover:bg-white/20 hover:text-white btn-large flex flex-col gap-2 h-auto py-4"
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="text-sm text-center leading-tight">
                          {t(item.key, language)}
                        </span>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
