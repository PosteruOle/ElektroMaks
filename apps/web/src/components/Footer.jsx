
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage.js';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t.nav.home },
    { path: '/services', label: t.nav.services },
    { path: '/contact', label: t.nav.contact }
  ];

  return (
    <footer className="border-t bg-muted/30 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://horizons-cdn.hostinger.com/d60b3481-e00e-4403-a421-f92fa9b69241/f534ef8093ed9065ca6b2e39b9ef46e6.png" 
                alt="Elektro Maks Logo" 
                className="h-6 w-auto object-contain"
              />
              <span className="text-xl font-bold">{t.companyName}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.home.aboutText.substring(0, 120)}...
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold mb-4 block">{t.footer.quickLinks}</span>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold mb-4 block">{t.footer.contactInfo}</span>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+381649338800</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>maksaub1@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{t.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
