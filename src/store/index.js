import {createStore} from "vuex";
import categories from "@/store/modules/categories.js";
import auth from "@/store/modules/auth.js";
import products from "@/store/modules/products.js";
import cart from "@/store/modules/cart.js";
import search from "@/store/modules/search.js";
import news from "@/store/modules/news.js";
import users from "@/store/modules/users.js";

export default createStore({
    modules: {
        categories, auth, products, cart, search, news, users
    }, actions: {}, mutations: {}, state: {}, getters: {},
});
