import axios from "@/utils/axios.js";

const actions = {
    async users({commit}) {
        const {data} = await axios.get("/users");
        commit("updateUsers", data);
    },
};
const mutations = {
    updateUsers: (state, res) => {
        state.users = res;
    },
};
const state = {
    users: null,
};
const getters = {
    getUsers: (state) => state.users,
};

export default {state, getters, mutations, actions};
