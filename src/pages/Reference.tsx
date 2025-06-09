
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Globe, Clock, FileText, Users, Heart } from 'lucide-react';

const Reference = () => {
  const { language } = useLanguage();

  const emergencyContacts = [
    { title: 'Скорая помощь', number: '103', icon: Heart, color: 'text-red-600' },
    { title: 'Служба экстренного реагирования', number: '112', icon: Phone, color: 'text-blue-600' },
    { title: 'Социальная служба', number: '+998 71 233-45-67', icon: Users, color: 'text-green-600' }
  ];

  const governmentServices = [
    {
      title: 'Министерство обороны',
      address: 'г. Ташкент, ул. Мустакиллик, 5',
      phone: '+998 71 239-12-34',
      website: 'www.mod.gov.uz'
    },
    {
      title: 'Комитет ветеранов войны',
      address: 'г. Ташкент, ул. Навои, 12',
      phone: '+998 71 244-56-78',
      website: 'www.veterans.gov.uz'
    },
    {
      title: 'Центр социальной защиты',
      address: 'г. Ташкент, ул. Амира Темура, 108',
      phone: '+998 71 250-11-22',
      website: 'www.mehnat.gov.uz'
    }
  ];

  const medicalServices = [
    {
      title: 'Военный госпиталь',
      address: 'г. Ташкент, ул. Фархадская, 2',
      phone: '+998 71 260-33-44',
      hours: 'Круглосуточно'
    },
    {
      title: 'Реабилитационный центр для ветеранов',
      address: 'г. Ташкент, ул. Чиланзар, 45',
      phone: '+998 71 270-55-66',
      hours: 'Пн-Пт: 8:00-17:00'
    }
  ];

  return (
    <div className="space-y-8 lg:space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text">
          {t('reference', language)}
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          Полезные контакты и адреса для ветеранов и их семей
        </p>
      </div>

      {/* Экстренные службы */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-3">
          <Phone className="w-8 h-8 text-red-600" />
          Экстренные службы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {emergencyContacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="card-enhanced border-l-4 border-l-red-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg lg:text-xl">
                    <IconComponent className={`w-6 h-6 ${contact.color}`} />
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl lg:text-3xl font-bold text-primary">{contact.number}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Государственные службы */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-600" />
          Государственные службы
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {governmentServices.map((service, index) => (
            <Card key={index} className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <p className="text-base lg:text-lg">{service.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-base lg:text-lg font-semibold">{service.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-base lg:text-lg text-blue-600 hover:underline cursor-pointer">
                    {service.website}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Медицинские службы */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-3">
          <Heart className="w-8 h-8 text-green-600" />
          Медицинские службы
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {medicalServices.map((service, index) => (
            <Card key={index} className="card-enhanced border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <p className="text-base lg:text-lg">{service.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-base lg:text-lg font-semibold">{service.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-base lg:text-lg">{service.hours}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Полезная информация */}
      <section>
        <Card className="card-enhanced bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-xl lg:text-2xl text-center">Важная информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base lg:text-lg">
              <div>
                <h4 className="font-semibold mb-2">Льготы по проезду:</h4>
                <p>Бесплатный проезд в общественном транспорте по удостоверению ветерана</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Медицинское обслуживание:</h4>
                <p>Бесплатное медицинское обслуживание в государственных учреждениях</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Коммунальные льготы:</h4>
                <p>Скидка 50% на оплату коммунальных услуг</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Правовая помощь:</h4>
                <p>Бесплатная юридическая консультация в наших офисах</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Reference;
