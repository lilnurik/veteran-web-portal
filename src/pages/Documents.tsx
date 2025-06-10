
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Download, 
  Search, 
  Filter,
  Calendar,
  Tag,
  ExternalLink,
  Award,
  Shield,
  Heart
} from 'lucide-react';

const Documents = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все документы', icon: FileText },
    { id: 'laws', name: 'Законы', icon: Shield },
    { id: 'benefits', name: 'Льготы', icon: Heart },
    { id: 'licenses', name: 'Лицензии', icon: Award }
  ];

  const documents = [
    {
      id: 1,
      title: 'Федеральный закон "О ветеранах"',
      category: 'laws',
      date: '2024-01-15',
      size: '2.3 МБ',
      description: 'Основной закон, регулирующий права и льготы ветеранов Российской Федерации',
      url: '#',
      type: 'pdf'
    },
    {
      id: 2,
      title: 'Льготы по оплате коммунальных услуг',
      category: 'benefits',
      date: '2024-02-10',
      size: '1.8 МБ',
      description: 'Порядок предоставления льгот ветеранам по оплате жилищно-коммунальных услуг',
      url: '#',
      type: 'pdf'
    },
    {
      id: 3,
      title: 'Лицензия на деятельность организации',
      category: 'licenses',
      date: '2023-12-01',
      size: '0.5 МБ',
      description: 'Лицензия на право ведения деятельности ветеранской организации',
      url: '#',
      type: 'pdf'
    },
    {
      id: 4,
      title: 'Медицинские льготы для ветеранов',
      category: 'benefits',
      date: '2024-03-05',
      size: '3.1 МБ',
      description: 'Перечень медицинских услуг и льгот, предоставляемых ветеранам',
      url: '#',
      type: 'pdf'
    },
    {
      id: 5,
      title: 'Закон о социальной защите',
      category: 'laws',
      date: '2024-01-20',
      size: '4.2 МБ',
      description: 'Федеральный закон о социальной защите граждан, подвергшихся воздействию радиации',
      url: '#',
      type: 'pdf'
    },
    {
      id: 6,
      title: 'Транспортные льготы',
      category: 'benefits',
      date: '2024-02-28',
      size: '1.2 МБ',
      description: 'Льготы ветеранам на проезд в общественном транспорте',
      url: '#',
      type: 'pdf'
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : FileText;
  };

  const getCategoryColor = (categoryId: string) => {
    const colors = {
      laws: 'text-blue-500 bg-blue-50',
      benefits: 'text-green-500 bg-green-50',
      licenses: 'text-purple-500 bg-purple-50'
    };
    return colors[categoryId as keyof typeof colors] || 'text-gray-500 bg-gray-50';
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
          Документы и законодательство
        </h1>
        <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto">
          Законы, льготы, лицензии и другие важные документы для ветеранов
        </p>
      </section>

      {/* Search and Filter */}
      <section className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
            <Input
              type="text"
              placeholder="Поиск по названию или описанию документа..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-14 h-14 text-lg border-2 focus:border-accent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedCategory(category.id)}
                  className="gap-3 text-lg px-6 py-3"
                >
                  <IconComponent className="w-5 h-5" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Results count */}
          <div className="text-center text-lg text-muted-foreground">
            Найдено документов: <span className="font-bold text-primary">{filteredDocuments.length}</span>
          </div>
        </div>
      </section>

      {/* Documents List */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDocuments.map((doc) => {
            const CategoryIcon = getCategoryIcon(doc.category);
            return (
              <Card key={doc.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getCategoryColor(doc.category)}`}>
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl lg:text-2xl mb-2 leading-tight">
                        {doc.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(doc.date).toLocaleDateString('ru-RU')}
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {doc.size}
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {categories.find(cat => cat.id === doc.category)?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {doc.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="gap-2 flex-1" asChild>
                      <a href={doc.url} target="_blank" rel="noopener noreferrer">
                        <Download className="w-5 h-5" />
                        Скачать
                      </a>
                    </Button>
                    <Button variant="outline" className="gap-2 flex-1" asChild>
                      <a href={doc.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                        Просмотр
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-16">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
              Документы не найдены
            </h3>
            <p className="text-lg text-muted-foreground">
              Попробуйте изменить параметры поиска или выбрать другую категорию
            </p>
          </div>
        )}
      </section>

      {/* Help Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
          Нужна помощь с документами?
        </h2>
        <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Наши специалисты помогут разобраться с документооборотом и оформлением льгот
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button size="lg" className="text-xl px-8 py-6" asChild>
            <a href="/contacts">Получить консультацию</a>
          </Button>
          <Button variant="outline" size="lg" className="text-xl px-8 py-6 border-2" asChild>
            <a href="/faq">Частые вопросы</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Documents;
