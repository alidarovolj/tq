import {createStore} from "vuex";
import Posts from "@/store/modules/posts";
import Registration from "@/store/modules/registration";
import Auth from "@/store/modules/auth";
import User from "@/store/modules/user.js";

export default createStore({
    modules: {
        Posts,
        Registration,
        Auth,
        User
    },
    actions: {},
    mutations: {},
    state: {},
    getters: {},
});
