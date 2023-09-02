import axios from "@/utils/axios.js";

const actions = {
    async categoriesWithProducts({commit}) {
        const {data} = await axios.get("/category-with-products");
        commit("updateCategoriesWithProducts", data);
    },
};
const mutations = {
    updateCategoriesWithProducts: (state, res) => {
        state.categoriesWithProducts = res;
    },
};
const state = {
    categoriesWithProducts: null,
};
const getters = {
    getCategoriesWithProducts: (state) => state.categoriesWithProducts
};

export default {state, getters, mutations, actions};
