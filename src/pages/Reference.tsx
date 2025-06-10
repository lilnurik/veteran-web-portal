
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ExternalLink,
  Heart,
  Shield,
  FileText,
  Users
} from 'lucide-react';

const Reference = () => {
  const { language } = useLanguage();

  const emergencyContacts = [
    {
      title: 'Экстренная помощь',
      phone: '112',
      description: 'Единый номер экстренных служб',
      available: '24/7',
      icon: Phone,
      color: 'text-red-500'
    },
    {
      title: 'Медицинская помощь',
      phone: '103',
      description: 'Скорая медицинская помощь',
      available: '24/7',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Служба спасения',
      phone: '101',
      description: 'Пожарная служба и спасение',
      available: '24/7',
      icon: Shield,
      color: 'text-orange-500'
    }
  ];

  const veteranServices = [
    {
      title: 'Пенсионный фонд',
      phone: '+7 (495) 123-45-67',
      address: 'ул. Примерная, 1',
      hours: 'Пн-Пт: 9:00-18:00',
      description: 'Оформление пенсий и льгот',
      icon: FileText,
      color: 'text-blue-500'
    },
    {
      title: 'Центр социальной защиты',
      phone: '+7 (495) 234-56-78',
      address: 'ул. Социальная, 15',
      hours: 'Пн-Пт: 8:30-17:30',
      description: 'Социальная поддержка ветеранов',
      icon: Users,
      color: 'text-green-500'
    },
    {
      title: 'Военкомат',
      phone: '+7 (495) 345-67-89',
      address: 'пр. Военный, 23',
      hours: 'Пн-Пт: 9:00-17:00',
      description: 'Военные документы и справки',
      icon: Shield,
      color: 'text-purple-500'
    }
  ];

  const usefulLinks = [
    {
      title: 'Госуслуги',
      url: 'https://gosuslugi.ru',
      description: 'Портал государственных услуг'
    },
    {
      title: 'Пенсионный фонд РФ',
      url: 'https://pfr.gov.ru',
      description: 'Официальный сайт ПФР'
    },
    {
      title: 'Министерство обороны',
      url: 'https://mil.ru',
      description: 'Официальный сайт Минобороны'
    },
    {
      title: 'Социальный навигатор',
      url: '#',
      description: 'Справочник социальных услуг'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
          Справочная информация
        </h1>
        <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto">
          Полезные контакты, адреса и ссылки для ветеранов
        </p>
      </section>

      {/* Emergency Contacts */}
      <section>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">
          Экстренные службы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emergencyContacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${contact.color}`} />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">
                      {contact.phone}
                    </div>
                    <p className="text-lg text-muted-foreground">{contact.description}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{contact.available}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Veteran Services */}
      <section>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">
          Службы для ветеранов
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {veteranServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <IconComponent className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-lg">{service.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div className="text-lg">{service.address}</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div className="text-lg">{service.hours}</div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Useful Links */}
      <section className="bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary text-center">
          Полезные ссылки
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usefulLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-accent/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2">{link.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{link.description}</p>
                    <Button variant="outline" className="gap-2" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Перейти <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center ml-4">
                    <ExternalLink className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
          Нужна помощь?
        </h2>
        <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Если вы не нашли нужную информацию, свяжитесь с нами любым удобным способом
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button size="lg" className="text-xl px-8 py-6" asChild>
            <a href="/contacts">Связаться с нами</a>
          </Button>
          <Button variant="outline" size="lg" className="text-xl px-8 py-6 border-2" asChild>
            <a href="tel:+7-495-123-45-67">Позвонить</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reference;
