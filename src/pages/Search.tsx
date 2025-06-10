
import React, { useState, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Upload, Search as SearchIcon, FileText, AlertCircle } from 'lucide-react';
import { parsePdfFile, searchVeterans, VeteranData } from '@/utils/pdfParser';

const Search = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<VeteranData[]>([]);
  const [allVeterans, setAllVeterans] = useState<VeteranData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [pdfFileName, setPdfFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Пожалуйста, загрузите PDF файл');
      return;
    }

    setIsLoading(true);
    setError('');
    setPdfFileName(file.name);

    try {
      const veterans = await parsePdfFile(file);
      setAllVeterans(veterans);
      setSearchResults([]);
      console.log(`Загружено ${veterans.length} записей ветеранов`);
    } catch (err) {
      setError('Ошибка при обработке PDF файла');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    if (allVeterans.length === 0) {
      setError('Сначала загрузите PDF файл со списком ветеранов');
      return;
    }

    const results = searchVeterans(allVeterans, searchQuery);
    setSearchResults(results);
    setError('');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-primary">
        {t('search', language)}
      </h1>

      {/* Загрузка PDF */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
            <Upload className="w-8 h-8 text-primary" />
            Загрузка списка ветеранов
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
            <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <Button 
              onClick={() => fileInputRef.current?.click()}
              size="lg" 
              className="text-lg px-8"
              disabled={isLoading}
            >
              {isLoading ? 'Обработка...' : 'Выбрать PDF файл'}
            </Button>
            <p className="text-muted-foreground mt-4">
              Загрузите PDF файл со списком ветеранов для поиска однополчан
            </p>
            {pdfFileName && (
              <p className="text-primary font-medium mt-2">
                Загружен: {pdfFileName} ({allVeterans.length} записей)
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Поиск */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
            <SearchIcon className="w-8 h-8 text-primary" />
            Поиск по базе ветеранов
          </CardTitle>
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
              disabled={allVeterans.length === 0}
            />
            <Button 
              onClick={handleSearch} 
              size="lg" 
              className="text-lg px-8"
              disabled={allVeterans.length === 0}
            >
              Поиск
            </Button>
          </div>

          {error && (
            <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <AlertCircle className="w-6 h-6 text-destructive" />
              <p className="text-destructive font-medium">{error}</p>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Найдено результатов: {searchResults.length}
              </h3>
              {searchResults.map((veteran, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-foreground">{veteran.name}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                      {veteran.rank && <p className="text-foreground"><strong>Звание:</strong> {veteran.rank}</p>}
                      {veteran.region && <p className="text-foreground"><strong>Регион:</strong> {veteran.region}</p>}
                      {veteran.unit && <p className="text-foreground"><strong>Часть:</strong> {veteran.unit}</p>}
                      {veteran.service && <p className="text-foreground"><strong>Служба:</strong> {veteran.service}</p>}
                      <p className="text-muted-foreground"><strong>Страница:</strong> {veteran.page}</p>
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded text-sm">
                      <strong>Исходный текст:</strong> {veteran.rawText}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {searchQuery && searchResults.length === 0 && allVeterans.length > 0 && !error && (
            <p className="text-lg text-center text-muted-foreground py-8">
              По вашему запросу ничего не найдено. Попробуйте изменить поисковые критерии.
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-foreground">Информация о поиске</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-foreground">
            Загрузите PDF файл со списком ветеранов, затем используйте поиск для нахождения однополчан. 
            Вы можете искать по ФИО, воинскому званию, региону, части или периоду службы.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-foreground">
            Поиск работает по частичному совпадению, поэтому можно вводить только часть данных.
            Если вы не нашли нужную информацию, обратитесь к нам через форму обратной связи.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Search;
