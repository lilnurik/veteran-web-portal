
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contacts = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here would be actual form submission logic
    alert('Сообщение отправлено!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-primary">
        {t('contacts', language)}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Наши контакты</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('address', language)}</h3>
              <p className="text-lg">
                г. Ташкент, ул. Примерная, д. 123<br />
                Офис 456, 100000
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('phone', language)}</h3>
              <p className="text-lg">
                +998 71 123-45-67<br />
                +998 90 123-45-67
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-lg">
                info@veterans-association.uz<br />
                support@veterans-association.uz
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Время работы</h3>
              <p className="text-lg">
                Понедельник - Пятница: 9:00 - 18:00<br />
                Суббота: 9:00 - 14:00<br />
                Воскресенье: выходной
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">{t('contactForm', language)}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg">{t('name', language)}</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="text-lg py-3"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-lg">{t('email', language)}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="text-lg py-3"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-lg">{t('message', language)}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="text-lg min-h-32"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-3">
                {t('send', language)}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Map placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Как нас найти</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-64 md:h-96 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-xl text-muted-foreground">Карта (будет интегрирована)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contacts;
