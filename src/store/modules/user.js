import axios from "@/utils/axios.js";

const actions = {
    async currentUser({commit}) {
        const {data} = await axios.get("/user");
        commit("updateCurrentUser", data);
    },
};
const mutations = {
    updateCurrentUser: (state, res) => {
        state.currentUser = res;
    },
};
const state = {
    currentUser: null,
};
const getters = {
    getCurrentUser: (state) => state.currentUser,
};

export default {state, getters, mutations, actions};
