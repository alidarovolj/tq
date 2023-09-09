import axios from "@/utils/axios.js";

const actions = {
    async product({commit}, id) {
        const {data} = await axios.get("/products/" + id);
        commit("updateProduct", data);
    },
};
const mutations = {
    updateProduct: (state, res) => {
        state.product = res;
    },
};
const state = {
    product: null,
};
const getters = {
    getProduct: (state) => state.product
};

export default {state, getters, mutations, actions};
