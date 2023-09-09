import {createStore} from "vuex";
import categories from "@/store/modules/categories.js";
import auth from "@/store/modules/auth.js";
import products from "@/store/modules/products.js";
import cart from "@/store/modules/cart.js";

export default createStore({
    modules: {
        categories, auth, products, cart
    }, actions: {}, mutations: {}, state: {}, getters: {},
});
