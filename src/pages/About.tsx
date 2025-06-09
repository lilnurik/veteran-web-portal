
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-primary">
        {t('about', language)}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">{t('ourMission', language)}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg md:text-xl leading-relaxed">
              Наша миссия заключается в объединении ветеранов, поддержке их интересов 
              и сохранении исторической памяти о подвигах наших защитников.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">{t('ourGoals', language)}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg md:text-xl leading-relaxed">
              Мы стремимся обеспечить социальную поддержку ветеранов, 
              содействовать в получении льгот и создавать условия для общения.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{t('history', language)}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            Ассоциация ветеранов была создана с целью объединения людей, 
            прошедших военную службу и посвятивших свою жизнь защите Родины.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            За годы работы мы помогли тысячам ветеранов в решении различных вопросов,
            организовали множество памятных мероприятий и способствовали сохранению
            военной истории нашей страны.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Сегодня наша ассоциация продолжает активную деятельность, 
            объединяя ветеранов разных поколений и помогая им в повседневной жизни.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
