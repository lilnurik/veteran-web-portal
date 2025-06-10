
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const { language } = useLanguage();

  const quickLinks = [
    { key: 'news', path: '/news', description: 'Последние новости и события' },
    { key: 'search', path: '/search', description: 'Найти сослуживцев' },
    { key: 'contacts', path: '/contacts', description: 'Связаться с нами' },
    { key: 'documents', path: '/documents', description: 'Документы и законы' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          {t('welcome', language)}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          {t('welcomeText', language)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about">
            <Button size="lg" className="text-xl px-8 py-4 w-full sm:w-auto">
              {t('about', language)}
            </Button>
          </Link>
          <Link to="/contacts">
            <Button variant="outline" size="lg" className="text-xl px-8 py-4 w-full sm:w-auto">
              {t('contacts', language)}
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Быстрый доступ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickLinks.map((link) => (
            <Link key={link.key} to={link.path}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-2xl">{t(link.key, language)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">{link.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent News Preview */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {t('news', language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Новость {i}</CardTitle>
                <p className="text-muted-foreground">01.01.2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Краткое описание новости для предварительного просмотра...</p>
                <Button variant="link" className="text-lg p-0 mt-2">
                  {t('readMore', language)} →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/news">
            <Button size="lg" variant="outline" className="text-xl px-8 py-4">
              Все новости
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
