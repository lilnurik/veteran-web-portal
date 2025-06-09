
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, Search as SearchIcon, Phone, FileText, Users, Shield, Award, Heart } from 'lucide-react';

const Home = () => {
  const { language } = useLanguage();

  const quickLinks = [
    { key: 'news', path: '/news', description: 'Последние новости и события', icon: Newspaper, color: 'from-blue-500 to-blue-600' },
    { key: 'search', path: '/search', description: 'Найти сослуживцев', icon: SearchIcon, color: 'from-green-500 to-green-600' },
    { key: 'contacts', path: '/contacts', description: 'Связаться с нами', icon: Phone, color: 'from-purple-500 to-purple-600' },
    { key: 'documents', path: '/documents', description: 'Документы и законы', icon: FileText, color: 'from-orange-500 to-orange-600' }
  ];

  const stats = [
    { icon: Users, value: '5,000+', label: 'Ветеранов в базе' },
    { icon: Award, value: '15', label: 'Лет работы' },
    { icon: Heart, value: '1,200+', label: 'Семей помогли' },
    { icon: Shield, value: '24/7', label: 'Поддержка' }
  ];

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 lg:space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold gradient-text leading-tight">
            {t('welcome', language)}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('welcomeText', language)}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
          <Link to="/about" className="flex-1 sm:flex-none">
            <Button size="lg" className="w-full sm:w-auto btn-xl gradient-bg hover:shadow-lg">
              <Users className="w-5 h-5 mr-2" />
              {t('about', language)}
            </Button>
          </Link>
          <Link to="/contacts" className="flex-1 sm:flex-none">
            <Button variant="outline" size="lg" className="w-full sm:w-auto btn-xl border-2">
              <Phone className="w-5 h-5 mr-2" />
              {t('contacts', language)}
            </Button>
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 lg:p-12 text-white">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">
          Наши достижения
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <div className="text-2xl lg:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm lg:text-base opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12">
          Быстрый доступ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {quickLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.key} to={link.path} className="block">
                <Card className="h-full card-enhanced group cursor-pointer overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${link.color}`}></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-4 text-xl lg:text-2xl group-hover:text-primary transition-colors">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${link.color} text-white`}>
                        <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" />
                      </div>
                      {t(link.key, language)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                      {link.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recent News Preview */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 lg:mb-12 gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t('news', language)}
          </h2>
          <Link to="/news">
            <Button size="lg" variant="outline" className="btn-large w-full sm:w-auto">
              Все новости →
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="card-enhanced group">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                <Newspaper className="w-12 h-12 text-blue-600 opacity-50" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl group-hover:text-primary transition-colors">
                  Важная новость {i}
                </CardTitle>
                <p className="text-sm lg:text-base text-muted-foreground">01.01.2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-base lg:text-lg leading-relaxed mb-4">
                  Краткое описание новости для предварительного просмотра...
                </p>
                <Button variant="link" className="text-base lg:text-lg p-0 h-auto text-primary font-semibold">
                  {t('readMore', language)} →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-muted/50 to-muted rounded-2xl p-6 lg:p-12 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
          Нужна помощь или консультация?
        </h2>
        <p className="text-base lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto">
          Мы всегда готовы помочь ветеранам и их семьям. Обращайтесь к нам по любым вопросам.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contacts">
            <Button size="lg" className="btn-xl w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Связаться с нами
            </Button>
          </Link>
          <Link to="/faq">
            <Button variant="outline" size="lg" className="btn-xl w-full sm:w-auto">
              Частые вопросы
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
