
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Search, Filter, Calendar, Tag } from 'lucide-react';

const Documents = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for documents
  const documents = [
    {
      id: '1',
      title: 'Закон "О ветеранах"',
      type: 'law',
      description: 'Основной закон о правах и льготах ветеранов',
      date: '2023-05-15',
      fileSize: '2.3 MB',
      language: 'ru'
    },
    {
      id: '2',
      title: 'Порядок получения льгот на проезд',
      type: 'benefit',
      description: 'Инструкция по оформлению льготного проезда',
      date: '2024-01-20',
      fileSize: '1.8 MB',
      language: 'ru'
    },
    {
      id: '3',
      title: 'Лицензия ассоциации ветеранов',
      type: 'license',
      description: 'Официальная лицензия на деятельность ассоциации',
      date: '2023-12-10',
      fileSize: '0.9 MB',
      language: 'ru'
    },
    {
      id: '4',
      title: 'Медицинские льготы для ветеранов',
      type: 'benefit',
      description: 'Перечень медицинских льгот и порядок их получения',
      date: '2024-02-28',
      fileSize: '3.1 MB',
      language: 'ru'
    },
    {
      id: '5',
      title: 'Жилищные льготы',
      type: 'benefit',
      description: 'Льготы по улучшению жилищных условий',
      date: '2023-11-05',
      fileSize: '2.7 MB',
      language: 'ru'
    },
    {
      id: '6',
      title: 'Устав ассоциации ветеранов',
      type: 'other',
      description: 'Основополагающий документ ассоциации',
      date: '2023-01-15',
      fileSize: '1.2 MB',
      language: 'ru'
    }
  ];

  const categories = [
    { value: 'all', label: 'Все документы', color: 'bg-gray-500' },
    { value: 'law', label: 'Законы', color: 'bg-blue-500' },
    { value: 'benefit', label: 'Льготы', color: 'bg-green-500' },
    { value: 'license', label: 'Лицензии', color: 'bg-purple-500' },
    { value: 'other', label: 'Прочее', color: 'bg-orange-500' }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeLabel = (type: string) => {
    const category = categories.find(cat => cat.value === type);
    return category ? category.label : type;
  };

  const getTypeColor = (type: string) => {
    const category = categories.find(cat => cat.value === type);
    return category ? category.color : 'bg-gray-500';
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text">
          {t('documents', language)}
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          Законы, льготы, лицензии и другие важные документы для ветеранов
        </p>
      </div>

      {/* Search and Filter Section */}
      <Card className="card-enhanced">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Search className="w-6 h-6 text-primary" />
            Поиск документов
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по названию или содержанию..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-lg py-3"
            />
          </div>

          {/* Category Filter */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-semibold">Фильтр по категориям:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className="btn-large"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl lg:text-2xl font-bold">
            Найдено документов: {filteredDocuments.length}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="card-enhanced">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <CardTitle className="text-lg lg:text-xl leading-tight">
                        {doc.title}
                      </CardTitle>
                      <Badge className={`${getTypeColor(doc.type)} text-white`}>
                        {getTypeLabel(doc.type)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {doc.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm lg:text-base text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(doc.date).toLocaleDateString('ru-RU')}
                  </div>
                  <div>
                    Размер: {doc.fileSize}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button className="flex-1 btn-large">
                    <Download className="w-5 h-5 mr-2" />
                    Скачать
                  </Button>
                  <Button variant="outline" className="btn-large">
                    Просмотр
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <Card className="card-enhanced">
            <CardContent className="text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Документы не найдены</h3>
              <p className="text-lg text-muted-foreground">
                Попробуйте изменить параметры поиска или выбрать другую категорию
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Information Section */}
      <Card className="card-enhanced bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-xl lg:text-2xl text-center">
            Информация о документах
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base lg:text-lg">
            <div>
              <h4 className="font-semibold mb-2 text-primary">Как получить документы:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Скачайте нужный документ с сайта</li>
                <li>• Обратитесь в наш офис за консультацией</li>
                <li>• Позвоните по телефону горячей линии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Актуальность документов:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Все документы регулярно обновляются</li>
                <li>• Дата последнего обновления указана</li>
                <li>• При изменениях уведомляем на сайте</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;
