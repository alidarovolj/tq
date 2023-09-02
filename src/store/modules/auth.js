import axios from "@/utils/axios.js";

const actions = {
    async authUser({commit}, form) {
        try {
            const {data} = await axios.post("/auth/login", form, {});
            localStorage.setItem("token", "Bearer " + data.data.token);
            localStorage.setItem("token_exp", data.data.expire_in);
            commit("updateAuth", data);
        } catch (error) {
            commit("updateAuth", error.response);
            console.error(error);
        }
    }, async setUser({commit}) {
        try {
            const data = await axios.get("/auth/me");
            localStorage.setItem("user", JSON.stringify(data.data.data));
            commit("updateUser", data);
        } catch (error) {
            commit("updateUser", error.response);
            console.error(error);
        }
    }, async logoutUser({commit}) {
        const bodyParameters = null;
        try {
            const {data} = await axios.post("/auth/logout", bodyParameters);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("token_exp");
            commit("updateLogout", data);
        } catch (error) {
            commit("updateLogout", error.response);
            console.error(error);
        }
    }, async currentUser({commit}) {
        const {data} = await axios.get("auth/me");
        commit("updateCurrentUser", data);
    }, async registerUser({commit}, form) {
        const {data} = await axios.post("signup", form);
        commit("updateRegisterUser", data);
    },
};
const mutations = {
    updateAuth: (state, res) => {
        state.authState = res;
    }, updateUser: (state, res) => {
        state.userState = res;
    }, updateLogout: (state, res) => {
        state.logoutState = res;
    }, updateCurrentUser: (state, res) => {
        state.currentUser = res;
    }, updateRegisterUser: (state, res) => {
        state.registeredUser = res;
    },
};
const state = {
    authState: null, userState: null, logoutState: null, currentUser: null, registeredUser: null
};
const getters = {
    getAuth: (state) => state.authState,
    getUser: (state) => state.userState,
    getLogout: (state) => state.logoutState,
    getCurrentUser: (state) => state.currentUser,
    getRegisteredUser: (state) => state.registeredUser,
};

export default {state, getters, mutations, actions};
