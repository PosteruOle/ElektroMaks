
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCalculator from '@/components/ServiceCalculator.jsx';
import { useLanguage } from '@/hooks/useLanguage.js';

const CalculatorPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{`${t.calculator.pageTitle} - ${t.companyName}`}</title>
        <meta name="description" content={t.calculator.pageSubtitle} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="mb-4">{t.calculator.pageTitle}</h1>
              <p className="text-xl text-muted-foreground">
                {t.calculator.pageSubtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ServiceCalculator />
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CalculatorPage;
