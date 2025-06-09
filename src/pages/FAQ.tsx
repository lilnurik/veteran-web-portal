
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const { language } = useLanguage();

  const faqItems = [
    {
      question: 'Как стать членом ассоциации?',
      answer: 'Для вступления в ассоциацию необходимо подать заявление, предоставить документы о военной службе и заполнить анкету. Подробную информацию можно получить в нашем офисе или по телефону.'
    },
    {
      question: 'Какие льготы предоставляются ветеранам?',
      answer: 'Ветераны имеют право на социальные льготы, медицинское обслуживание, компенсации и другие виды поддержки в соответствии с действующим законодательством.'
    },
    {
      question: 'Как получить справку о прохождении службы?',
      answer: 'Справки о прохождении военной службы выдаются в военкоматах по месту призыва или в архивных службах. Наша ассоциация может помочь в оформлении запросов.'
    },
    {
      question: 'Проводятся ли памятные мероприятия?',
      answer: 'Да, мы регулярно организуем памятные мероприятия, встречи ветеранов, торжественные собрания по важным датам военной истории.'
    },
    {
      question: 'Как найти сослуживцев?',
      answer: 'Воспользуйтесь нашим разделом "Поиск однополчан", где можно найти информацию о ветеранах по различным критериям поиска.'
    },
    {
      question: 'Какую помощь оказывает ассоциация?',
      answer: 'Мы оказываем правовую поддержку, помогаем в оформлении документов, организуем социальные программы и обеспечиваем информационную поддержку ветеранов.'
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-primary">
        {t('faq', language)}
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{t('frequentQuestions', language)}</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg md:text-xl font-semibold py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQ;
