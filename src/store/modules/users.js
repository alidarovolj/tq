import axios from "@/utils/axios.js";

const actions = {
    async users({commit}) {
        const {data} = await axios.get("/users");
        commit("updateUsers", data);
    }, async removeUser({commit}, id) {
        const {data} = await axios.delete("/users/" + id);
        commit("updateRemovedUsers", data);
    },
};
const mutations = {
    updateUsers: (state, res) => {
        state.users = res;
    }, updateRemovedUsers: (state, res) => {
        state.removedUser = res;
    },
};
const state = {
    users: null, removedUser: null
};
const getters = {
    getUsers: (state) => state.users, getRemovedUser: (state) => state.removedUser
};

export default {state, getters, mutations, actions};
