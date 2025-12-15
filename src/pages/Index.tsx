import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const services = [
  { id: 1, name: 'Классический маникюр', price: '1500', duration: '60 мин', icon: 'Sparkles' },
  { id: 2, name: 'Аппаратный маникюр', price: '1800', duration: '60 мин', icon: 'Zap' },
  { id: 3, name: 'Гель-лак', price: '2200', duration: '90 мин', icon: 'Palette' },
  { id: 4, name: 'Наращивание ногтей', price: '3500', duration: '120 мин', icon: 'Wand2' },
  { id: 5, name: 'Педикюр классический', price: '2000', duration: '75 мин', icon: 'Heart' },
  { id: 6, name: 'Педикюр аппаратный', price: '2300', duration: '75 мин', icon: 'Star' },
];

const reviews = [
  { id: 1, name: 'Анна Петрова', rating: 5, text: 'Потрясающая работа мастеров! Маникюр держится уже 3 недели. Очень довольна!', avatar: '👩' },
  { id: 2, name: 'Мария Иванова', rating: 5, text: 'Чистый салон, приятная атмосфера. Мастер делает всё аккуратно и быстро. Рекомендую!', avatar: '👱‍♀️' },
  { id: 3, name: 'Елена Смирнова', rating: 5, text: 'Профессиональный подход и отличный результат! Теперь только к вам!', avatar: '🧑‍🦰' },
];

const masters = [
  { id: 1, name: 'Анастасия', specialty: 'Мастер маникюра', experience: '5 лет' },
  { id: 2, name: 'Виктория', specialty: 'Мастер педикюра', experience: '7 лет' },
  { id: 3, name: 'Екатерина', specialty: 'Универсал', experience: '4 года' },
];

const timeSlots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];

export default function Index() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBooking = () => {
    if (selectedService && selectedMaster && selectedTime && name && phone) {
      alert(`Запись успешна!\n\nУслуга: ${selectedService}\nМастер: ${selectedMaster}\nВремя: ${selectedTime}\nИмя: ${name}\nТелефон: ${phone}`);
      setIsDialogOpen(false);
      setSelectedService('');
      setSelectedMaster('');
      setSelectedTime('');
      setName('');
      setPhone('');
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/aebd038d-13e7-46fd-af8a-af311208d3c3/files/4ac95751-31cb-497a-b400-fca81ae48ab9.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
          <Badge className="mb-4 text-lg px-4 py-2" variant="secondary">
            ✨ Профессиональный салон красоты
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Маникюр & Педикюр
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаём идеальные ногти с любовью к деталям. Современные техники и стильный дизайн.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  <Icon name="Calendar" className="mr-2" />
                  Записаться онлайн
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Онлайн запись</DialogTitle>
                  <DialogDescription>
                    Выберите услугу, мастера и удобное время
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Услуга</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service.id} value={service.name}>
                            {service.name} — {service.price}₽
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="master">Мастер</Label>
                    <Select value={selectedMaster} onValueChange={setSelectedMaster}>
                      <SelectTrigger id="master">
                        <SelectValue placeholder="Выберите мастера" />
                      </SelectTrigger>
                      <SelectContent>
                        {masters.map(master => (
                          <SelectItem key={master.id} value={master.name}>
                            {master.name} — {master.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(time => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Введите имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleBooking} 
                  size="lg" 
                  className="w-full"
                  disabled={!selectedService || !selectedMaster || !selectedTime || !name || !phone}
                >
                  Подтвердить запись
                </Button>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Phone" className="mr-2" />
              8 (920) 166-64-42
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Всё для красоты ваших ногтей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription className="text-lg">{service.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-bold text-primary">{service.price}₽</span>
                    <Button variant="ghost" size="sm">
                      Записаться
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">Честные цены без скрытых платежей</p>
          </div>
          <Card className="border-2">
            <CardContent className="p-0">
              <div className="divide-y">
                {services.map(service => (
                  <div key={service.id} className="p-6 flex justify-between items-center hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name={service.icon as any} size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-primary">{service.price}₽</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Нам доверяют более 500 довольных клиентов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={review.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-4xl">{review.avatar}</div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Мы находимся в центре города</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Адрес и контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, Дмитровское шоссе, д. 30, к. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">8 (920) 166-64-42</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 10:00 - 21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Ваше имя</Label>
                    <Input id="contact-name" placeholder="Введите имя" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Input id="message" placeholder="Ваше сообщение" />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-2">© 2024 Маникюр & Педикюр. Все права защищены.</p>
          <p className="text-sm opacity-80">Создано с любовью для ваших ногтей ✨</p>
        </div>
      </footer>
    </div>
  );
}