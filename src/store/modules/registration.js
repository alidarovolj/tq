import ax from "axios";
import axios from "@/utils/axios.js";

const actions = {
    async registration({commit}, form) {
        const {data} = await axios.post("/userRegistration", form);
        commit("updateRegistration", data);
    },
};
const mutations = {
    updateRegistration: (state, res) => {
        state.registration = res;
    },
};
const state = {
    registration: null,
};
const getters = {
    getRegistration: (state) => state.registration,
};

export default {state, getters, mutations, actions};
