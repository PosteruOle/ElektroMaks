
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Check, Zap, Shield, Clock, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useLanguage } from '@/hooks/useLanguage.js';

const HomePage = () => {
  const { t } = useLanguage();

  const keyServices = [
    { icon: Zap, title: t.services.installation.title, description: t.services.installation.description },
    { icon: Shield, title: t.services.repair.title, description: t.services.repair.description },
    { icon: Clock, title: t.services.inspection.title, description: t.services.inspection.description },
    { icon: Award, title: t.services.wiring.title, description: t.services.wiring.description }
  ];

  return (
    <>
      <Helmet>
        <title>{`${t.companyName} - ${t.home.heroTitle}`}</title>
        <meta name="description" content={t.home.heroSubtitle} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src="https://horizons-cdn.hostinger.com/d60b3481-e00e-4403-a421-f92fa9b69241/f534ef8093ed9065ca6b2e39b9ef46e6.png" 
                    alt="Elektro Maks Logo" 
                    className="h-12 md:h-16 w-auto object-contain mb-6"
                  />
                  <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200">
                    {t.companyName}
                  </Badge>
                  <h1 className="mb-6">{t.home.heroTitle}</h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-[65ch]">
                    {t.home.heroSubtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/services">
                      <Button size="lg" className="transition-all duration-200 active:scale-98">
                        {t.home.heroButton}
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="transition-all duration-200 active:scale-98">
                        {t.common.contactUs}
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1587810437529-635e102c1ac4"
                      alt="Professional electrician at work"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="mb-6">{t.home.aboutTitle}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t.home.aboutText}
                  </p>
                  <h3 className="mb-4">{t.home.expertiseTitle}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.home.expertiseText}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>{t.home.trustTitle}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {t.home.trustItems.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                              <Check className="h-4 w-4 text-primary" />
                            </div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="mb-4">{t.home.servicesTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {t.services.pageSubtitle}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {keyServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle>{service.title}</CardTitle>
                          <CardDescription className="text-base">{service.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center mt-12"
              >
                <Link to="/services">
                  <Button size="lg" variant="outline" className="transition-all duration-200 active:scale-98">
                    {t.common.viewAll}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
