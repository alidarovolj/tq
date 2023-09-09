import {createApp} from "vue";
import {createMetaManager} from "vue-meta";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {
    faArrowLeft,
    faBars,
    faCartShopping,
    faCheck,
    faChevronDown,
    faChevronRight, faClock, faEye,
    faHeart,
    faKey,
    faMagnifyingGlass,
    faMessage,
    faMoon,
    faPhone,
    faSun,
    faUser,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

import {notify} from "@/utils/toasts.js";

import App from "./App.vue";
import Vue3Toastify from "vue3-toastify";
import i18n from "./i18n";
import store from "./store";
import router from "./router";

import "@/assets/css/main.css";
import "@/assets/css/fonts.css";

library.add(faBars);
library.add(faUser);
library.add(faKey);
library.add(faMessage);
library.add(faMagnifyingGlass);
library.add(faSun)
library.add(faCartShopping)
library.add(faHeart)
library.add(faChevronRight)
library.add(fab)
library.add(faMoon)
library.add(faXmark)
library.add(faChevronDown)
library.add(faCheck)
library.add(faPhone)
library.add(faEye)
library.add(faClock)
library.add(faArrowLeft)
library.add()

createApp(App)
    .use(store)
    .use(Vue3Toastify, {
        autoClose: 3000,
    })
    .provide('notify', notify)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .use(i18n)
    .use(createMetaManager())
    .mount("#app");
