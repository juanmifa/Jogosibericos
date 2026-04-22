import React, { createContext, useContext, useState, ReactNode } from 'react';
import { i18n } from './i18n';

type Lang = 'es' | 'pt';

interface LangContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => any;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('es');

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = i18n[lang];
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
