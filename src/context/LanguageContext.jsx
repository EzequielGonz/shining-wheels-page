import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'shiningWheelsLang';

const LanguageContext = createContext();

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

const getNested = (obj, path) => {
  const keys = path.split('.');
  let cur = obj;
  for (const k of keys) {
    if (cur == null || typeof cur !== 'object') return undefined;
    cur = cur[k];
  }
  return cur;
};

export const LanguageProvider = ({ children, translations }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'en' || saved === 'es' || saved === 'pt')) return saved;
    } catch (_) {}
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (_) {}
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (lang === 'en' || lang === 'es' || lang === 'pt') setLanguageState(lang);
  }, []);

  const t = useCallback(
    (key, vars = null) => {
      const base = translations[language] || translations.en;
      let val = getNested(base, key);
      if (val == null || typeof val !== 'string') val = getNested(translations.en, key);
      if (val == null || typeof val !== 'string') return typeof vars === 'string' ? vars : key;
      if (vars && typeof vars === 'object') {
        Object.keys(vars).forEach((k) => {
          val = val.replace(new RegExp(`{{${k}}}`, 'g'), String(vars[k]));
        });
      }
      return val;
    },
    [language, translations]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
