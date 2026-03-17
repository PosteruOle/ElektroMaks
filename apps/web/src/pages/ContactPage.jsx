
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card.jsx';
import { Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { useLanguage } from '@/hooks/useLanguage.js';

const ContactPage = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: '+381649338800',
      href: 'tel:+381649338800'
    },
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: 'maksaub1@gmail.com',
      href: 'mailto:maksaub1@gmail.com'
    },
    {
      icon: MapPin,
      label: t.contact.addressLabel,
      value: t.contact.address,
      href: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`${t.contact.pageTitle} - ${t.companyName}`}</title>
        <meta name="description" content={t.contact.pageSubtitle} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="mb-4">{t.contact.pageTitle}</h1>
              <p className="text-xl text-muted-foreground">
                {t.contact.pageSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="shadow-lg h-full">
                  <CardHeader>
                    <CardTitle>{t.contact.formTitle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>{t.contact.contactInfoTitle}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      const content = (
                        <div className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 hover:bg-muted/50">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            <p className="font-medium">{info.value}</p>
                          </div>
                        </div>
                      );

                      return info.href ? (
                        <a
                          key={index}
                          href={info.href}
                          className="block transition-opacity duration-200 hover:opacity-80"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={index}>{content}</div>
                      );
                    })}
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-sm leading-relaxed">
                      {t.home.aboutText}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
