
import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Header />
      <main className="container mx-auto px-4 py-6 lg:py-12">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      <footer className="bg-gradient-to-r from-primary to-accent mt-16 py-8 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl font-medium mb-2">
              © 2024 Ассоциация ветеранов. Все права защищены.
            </p>
            <p className="text-sm lg:text-base opacity-90">
              Официальный сайт ветеранской организации
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
