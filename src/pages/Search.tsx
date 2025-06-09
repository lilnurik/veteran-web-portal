
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Search = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Mock veteran data
  const veterans = [
    {
      name: 'Иванов Иван Иванович',
      rank: 'Старший лейтенант',
      region: 'Ташкентская область',
      unit: '15-я мотострелковая дивизия',
      service: '1980-1982'
    },
    {
      name: 'Петров Петр Петрович', 
      rank: 'Сержант',
      region: 'Самаркандская область',
      unit: '201-я мотострелковая дивизия',
      service: '1978-1980'
    },
    {
      name: 'Сидоров Алексей Михайлович',
      rank: 'Лейтенант',
      region: 'Бухарская область', 
      unit: '15-я мотострелковая дивизия',
      service: '1981-1983'
    }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results = veterans.filter(veteran => 
      Object.values(veteran).some(value => 
        value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    
    setSearchResults(results);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-primary">
        {t('search', language)}
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Поиск по базе ветеранов</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder={t('searchPlaceholder', language)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-lg py-3"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button onClick={handleSearch} size="lg" className="text-lg px-8">
              Поиск
            </Button>
          </div>

          {searchResults.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Найдено результатов: {searchResults.length}
              </h3>
              {searchResults.map((veteran, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">{veteran.name}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                      <p><strong>Звание:</strong> {veteran.rank}</p>
                      <p><strong>Регион:</strong> {veteran.region}</p>
                      <p><strong>Часть:</strong> {veteran.unit}</p>
                      <p><strong>Служба:</strong> {veteran.service}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {searchQuery && searchResults.length === 0 && (
            <p className="text-lg text-center text-muted-foreground py-8">
              По вашему запросу ничего не найдено. Попробуйте изменить поисковые критерии.
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Информация о поиске</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Вы можете искать сослуживцев по ФИО, воинскому званию, региону, части или периоду службы. 
            Поиск работает по частичному совпадению, поэтому можно вводить только часть данных.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Если вы не нашли нужную информацию, обратитесь к нам через форму обратной связи 
            или по телефону - мы поможем в поиске.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Search;
