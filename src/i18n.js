import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/common.json';
import fr from './locales/fr/common.json';

const resources = {
    en: { translation: en },
    fr: { translation: fr },
};

i18n
    .use(LanguageDetector) // auto-detect user language
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en', // default if language not available
        detection: {
            order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lang',
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'], // remember choice
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
