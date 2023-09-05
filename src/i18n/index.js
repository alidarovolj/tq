import {createI18n} from "vue-i18n";
import ru from "./ru.json"
import kz from "./kz.json"


const messages = {
    ru: ru, kz: kz,
};

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages,
});
