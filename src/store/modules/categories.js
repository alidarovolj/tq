import axios from "@/utils/axios.js";

const actions = {
    async categories({commit}) {
        const {data} = await axios.get("/categories");
        commit("updateCategories", data);
    }, async categoriesWithProducts({commit}) {
        const {data} = await axios.get("/category-with-products");
        commit("updateCategoriesWithProducts", data);
    }, async category({commit}, id) {
        const {data} = await axios.get("/categories/" + id);
        commit("updateCategory", data);
    },
};
const mutations = {
    updateCategories: (state, res) => {
        state.categories = res;
    }, updateCategoriesWithProducts: (state, res) => {
        state.categoriesWithProducts = res;
    }, updateCategory: (state, res) => {
        state.category = res;
    },
};
const state = {
    categories: null, categoriesWithProducts: null, category: null,
};
const getters = {
    getCategories: (state) => state.categories,
    getCategoriesWithProducts: (state) => state.categoriesWithProducts,
    getCategory: (state) => state.category
};

export default {state, getters, mutations, actions};
