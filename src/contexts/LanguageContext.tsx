import { FC, createContext, useState, useMemo } from 'react';
import Languages from '../features/language/language.types';
import esTranslations from '../data/i18n.es';
import enTranslations from '../data/i18n.en';
import ptTranslations from '../data/i18n.pt';

interface LanguageContextProps {
  language: Languages;
  setLanguage: (language: Languages) => void;
  t: (key: string) => string;
}

const initialState = {
  language: 'ENGLISH' as Languages
} as LanguageContextProps;

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const LanguageProvider: FC = ({ children }) => {
  const [language, setLanguage] = useState<Languages>(initialState.language);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string) => {
        if (language === 'SPANISH') {
          return esTranslations[key];
        } else if (language === 'ENGLISH') {
          return enTranslations[key];
        } else if (language === 'PORTUGUESE') {
          return ptTranslations[key];
        }
        return key;
      }
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
