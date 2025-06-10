
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Newspaper, 
  Search, 
  Phone, 
  FileText, 
  Users, 
  Award,
  Heart,
  Shield,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const { language } = useLanguage();

  const quickLinks = [
    { 
      key: 'news', 
      path: '/news', 
      description: 'Последние новости и события организации',
      icon: Newspaper,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      key: 'search', 
      path: '/search', 
      description: 'Найти сослуживцев и однополчан',
      icon: Search,
      color: 'from-green-500 to-green-600'
    },
    { 
      key: 'contacts', 
      path: '/contacts', 
      description: 'Связаться с нами любым удобным способом',
      icon: Phone,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      key: 'documents', 
      path: '/documents', 
      description: 'Документы, законы и льготы для ветеранов',
      icon: FileText,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    {
      title: 'Поддержка ветеранов',
      description: 'Мы помогаем ветеранам получить необходимую поддержку и льготы',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Защита прав',
      description: 'Защищаем права и интересы ветеранов на всех уровнях',
      icon: Shield,
      color: 'text-blue-500'
    },
    {
      title: 'Сообщество',
      description: 'Объединяем ветеранов для взаимной поддержки и общения',
      icon: Users,
      color: 'text-green-500'
    },
    {
      title: 'Признание заслуг',
      description: 'Чтим память и отмечаем заслуги наших героев',
      icon: Award,
      color: 'text-yellow-500'
    }
  ];

  return (
    <div className="space-y-12 lg:space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 lg:p-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            {t('welcome', language)}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            {t('welcomeText', language)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/about" className="w-full sm:w-auto">
              <Button size="lg" className="text-xl px-8 py-6 w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                {t('about', language)}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contacts" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="text-xl px-8 py-6 w-full border-2 hover:bg-accent/10">
                {t('contacts', language)}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary">
          Наша миссия
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 bg-gradient-to-br from-white to-accent/5">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary">
          Быстрый доступ
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {quickLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.key} to={link.path}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-accent/30 overflow-hidden">
                  <CardHeader className="relative">
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${link.color} opacity-10 rounded-bl-full`}></div>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl lg:text-2xl group-hover:text-accent transition-colors">
                        {t(link.key, language)}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 flex items-center text-accent font-medium">
                      Перейти <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recent News Preview */}
      <section className="bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary">
          {t('news', language)}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 bg-white">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center">
                  <Newspaper className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="text-xl lg:text-2xl">Важная новость {i}</CardTitle>
                <p className="text-muted-foreground font-medium">01.01.2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-4">
                  Краткое описание новости для предварительного просмотра...
                </p>
                <Button variant="link" className="text-lg p-0 h-auto font-medium text-accent hover:text-accent/80">
                  {t('readMore', language)} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/news">
            <Button size="lg" variant="outline" className="text-xl px-8 py-6 border-2 hover:bg-accent/10">
              Все новости
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
