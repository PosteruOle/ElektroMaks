
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import { useLanguage } from '@/hooks/useLanguage.js';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.general.title,
      description: t.services.general.description,
      benefits: t.services.general.benefits,
      image: 'https://images.unsplash.com/photo-1571552706196-66bbc6163cef'
    },
    {
      title: t.services.installation.title,
      description: t.services.installation.description,
      benefits: t.services.installation.benefits,
      image: 'https://images.unsplash.com/photo-1631336262463-2652fdc0020f'
    },
    {
      title: t.services.repair.title,
      description: t.services.repair.description,
      benefits: t.services.repair.benefits,
      image: 'https://images.unsplash.com/photo-1571552706196-66bbc6163cef'
    },
    {
      title: t.services.inspection.title,
      description: t.services.inspection.description,
      benefits: t.services.inspection.benefits,
      image: 'https://images.unsplash.com/photo-1631336262463-2652fdc0020f'
    },
    {
      title: t.services.wiring.title,
      description: t.services.wiring.description,
      benefits: t.services.wiring.benefits,
      image: 'https://images.unsplash.com/photo-1571552706196-66bbc6163cef'
    },
    {
      title: t.services.emergency.title,
      description: t.services.emergency.description,
      benefits: t.services.emergency.benefits,
      image: 'https://images.unsplash.com/photo-1631336262463-2652fdc0020f'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`${t.services.pageTitle} - ${t.companyName}`}</title>
        <meta name="description" content={t.services.pageSubtitle} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h1 className="mb-4">{t.services.pageTitle}</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {t.services.pageSubtitle}
                </p>
              </motion.div>

              <div className="space-y-20">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
