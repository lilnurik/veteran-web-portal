
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NewsDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  // Mock news data - in real app would fetch by id
  const newsItem = {
    id: id,
    title: 'Празднование Дня Победы',
    date: '09.05.2024',
    content: `Торжественное мероприятие, посвященное 79-й годовщине Победы в Великой Отечественной войне, прошло в центре города. Ветераны, их семьи и представители общественности собрались, чтобы почтить память героев.

В мероприятии приняли участие более 200 ветеранов различных военных конфликтов. Была организована выставка военных фотографий и документов, концертная программа с участием местных творческих коллективов.

Особое внимание было уделено молодому поколению - школьники и студенты имели возможность пообщаться с ветеранами, послушать их рассказы о службе и военных буднях.

Мероприятие завершилось возложением цветов к памятнику павшим воинам и минутой молчания в память о всех, кто отдал свою жизнь за Родину.`,
    image: '/placeholder.svg'
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex gap-4 mb-6">
        <Link to="/news">
          <Button variant="outline" size="lg" className="text-lg">
            ← Все новости
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {newsItem.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">{newsItem.date}</p>

          <img 
            src={newsItem.image} 
            alt={newsItem.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            {newsItem.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg md:text-xl leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" size="lg" className="text-lg">
          ← {t('previous', language)}
        </Button>
        <Button variant="outline" size="lg" className="text-lg">
          {t('next', language)} →
        </Button>
      </div>
    </div>
  );
};

export default NewsDetail;
