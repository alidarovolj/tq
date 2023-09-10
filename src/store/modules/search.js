import axios from "@/utils/axios.js";
import router from "@/router/index.js";

const actions = {
    async searchProduct({commit}) {
        const {data} = await axios.get("/search/", {
            params: router.currentRoute.value.query,
        });
        commit("updateSearch", data);
    },
};
const mutations = {
    updateSearch: (state, res) => {
        state.searchProduct = res;
    },
};
const state = {
    searchProduct: null,
};
const getters = {
    getSearchedProduct: (state) => state.searchProduct
};

export default {state, getters, mutations, actions};
