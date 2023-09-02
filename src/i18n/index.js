import {createI18n} from "vue-i18n";
import ru from "./ru.json"
import kz from "./kz.json"
import en from "./en.json"


const messages = {
    ru: ru,
    en: en,
    kz: kz,
};

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages,
});
