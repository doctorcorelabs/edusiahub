import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import id from './locales/id.json';
import { mergeAITranslations } from './ai-translations';
import { updateHeaderNavigation } from './header-updates';

// Merge AI translations and header updates with existing translations
const enWithAI = mergeAITranslations(updateHeaderNavigation(en, 'en'), 'en');
const idWithAI = mergeAITranslations(updateHeaderNavigation(id, 'id'), 'id');

const resources = {
  en: {
    translation: enWithAI,
  },
  id: {
    translation: idWithAI,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 