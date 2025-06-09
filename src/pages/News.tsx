
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const News = () => {
  const { language } = useLanguage();

  // Mock news data
  const newsItems = [
    {
      id: '1',
      title: 'Празднование Дня Победы',
      date: '09.05.2024',
      excerpt: 'Торжественное мероприятие, посвященное 79-й годовщине Победы в Великой Отечественной войне...',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'Новые льготы для ветеранов',
      date: '15.04.2024',
      excerpt: 'Правительство утвердило новые меры социальной поддержки для ветеранов военной службы...',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Встреча однополчан',
      date: '01.04.2024',
      excerpt: 'Состоялась встреча ветеранов 15-й мотострелковой дивизии. Участники поделились воспоминаниями...',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-primary">
        {t('news', language)}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl md:text-2xl">{item.title}</CardTitle>
              <p className="text-muted-foreground text-lg">{item.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed mb-4">{item.excerpt}</p>
              <Link to={`/news/${item.id}`}>
                <Button className="text-lg w-full">
                  {t('readMore', language)}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
