import axios from "@/utils/axios.js";

const actions = {
    async users({commit}) {
        const {data} = await axios.get("/users");
        commit("updateUsers", data);
    }, async removeUser({commit}, id) {
        const {data} = await axios.delete("/users/" + id);
        commit("updateRemovedUsers", data);
    }, async updateUser({commit}, { id, form }) {
        const {data} = await axios.put("/users/" + id, form);
        commit("updateUpdatedUser", data);
    }, async forgotPassword({commit}, form) {
        const {data} = await axios.get("/forgot-password?phone=" + form.phone);
        commit("updateForgotPass", data);
    },
};
const mutations = {
    updateUsers: (state, res) => {
        state.users = res;
    }, updateRemovedUsers: (state, res) => {
        state.removedUser = res;
    }, updateUpdatedUser: (state, res) => {
        state.updatedUser = res;
    }, updateForgotPass: (state, res) => {
        state.forgotPass = res;
    },
};
const state = {
    users: null, removedUser: null, updatedUser: null, forgotPass: null
};
const getters = {
    getUsers: (state) => state.users, getRemovedUser: (state) => state.removedUser
};

export default {state, getters, mutations, actions};
