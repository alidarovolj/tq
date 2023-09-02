import {createStore} from "vuex";
import categories from "@/store/modules/categories.js";
import auth from "@/store/modules/auth.js";

export default createStore({
    modules: {
        categories, auth
    }, actions: {}, mutations: {}, state: {}, getters: {},
});
