
import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Header />
      <main className="container mx-auto px-4 py-6 lg:py-12">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      <footer className="bg-gradient-to-r from-primary to-accent mt-16 py-8 lg:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
            <div className="text-white">
              <h3 className="text-lg lg:text-xl font-bold mb-2">Контакты</h3>
              <p className="text-sm lg:text-base opacity-90">+998 71 123-45-67</p>
              <p className="text-sm lg:text-base opacity-90">info@veterans.uz</p>
            </div>
            <div className="text-white">
              <h3 className="text-lg lg:text-xl font-bold mb-2">Адрес</h3>
              <p className="text-sm lg:text-base opacity-90">г. Ташкент, ул. Примерная, д. 123</p>
            </div>
            <div className="text-white">
              <h3 className="text-lg lg:text-xl font-bold mb-2">Время работы</h3>
              <p className="text-sm lg:text-base opacity-90">Пн-Пт: 9:00-18:00</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-base lg:text-lg text-white opacity-90">
              © 2024 Ассоциация ветеранов. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
