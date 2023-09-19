import {createStore} from "vuex";
import categories from "@/store/modules/categories.js";
import auth from "@/store/modules/auth.js";
import products from "@/store/modules/products.js";
import cart from "@/store/modules/cart.js";
import search from "@/store/modules/search.js";
import news from "@/store/modules/news.js";
import users from "@/store/modules/users.js";
import orders from "@/store/modules/orders.js";
import verification from "@/store/modules/verification.js";
import sidebar from "@/store/modules/sidebar.js";
import feedback from "@/store/modules/feedback.js";

export default createStore({
    modules: {
        categories, auth, products, cart, search, news, users, orders, verification, sidebar, feedback
    }, actions: {}, mutations: {}, state: {}, getters: {},
});
