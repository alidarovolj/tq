import axios from "@/utils/axios.js";

const actions = {
    async product({commit}, id) {
        const {data} = await axios.get("/products/" + id);
        commit("updateProduct", data);
    },
    async sameProducts({commit}, id) {
        const {data} = await axios.get("/products/same-products/" + id);
        commit("updateSameProducts", data);
    },
};
const mutations = {
    updateProduct: (state, res) => {
        state.product = res;
    },
    updateSameProducts: (state, res) => {
        state.sameProducts = res;
    },
};
const state = {
    product: null,
    sameProducts: null
};
const getters = {
    getProduct: (state) => state.product,
    getSameProducts: (state) => state.sameProducts
};

export default {state, getters, mutations, actions};
