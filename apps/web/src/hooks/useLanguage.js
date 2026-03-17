
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext.jsx';
import { translations } from '@/utils/translations.js';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  const { language, toggleLanguage } = context;
  const t = translations[language];

  return { language, toggleLanguage, t };
};
