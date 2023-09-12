import axios from "@/utils/axios.js";

const actions = {
    async products({commit}) {
        const {data} = await axios.get("/products/");
        commit("updateProducts", data);
    }, async product({commit}, id) {
        const {data} = await axios.get("/products/" + id);
        commit("updateProduct", data);
    }, async sameProducts({commit}, id) {
        const {data} = await axios.get("/products/same-products/" + id);
        commit("updateSameProducts", data);
    }, async createProduct({commit}, form) {
        const {data} = await axios.get("/products", form);
        commit("updateCreatedProduct", data);
    }, async removeProduct({commit}, id) {
        const {data} = await axios.delete("/products/" + id);
        commit("updateRemovedProduct", data);
    }, async editProduct({commit}, id) {
        const {data} = await axios.post("/products/" + id);
        commit("updateEditedProduct", data);
    },
};
const mutations = {
    updateProducts: (state, res) => {
        state.products = res;
    }, updateProduct: (state, res) => {
        state.product = res;
    }, updateSameProducts: (state, res) => {
        state.sameProducts = res;
    }, updateCreatedProduct: (state, res) => {
        state.createdProduct = res;
    }, updateRemovedProduct: (state, res) => {
        state.removedProduct = res;
    }, updateEditedProduct: (state, res) => {
        state.editedProduct = res;
    },
};
const state = {
    products: null, product: null, sameProducts: null, createdProduct: null, removedProduct: null, editedProduct: null
};
const getters = {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getSameProducts: (state) => state.sameProducts,
    getCreatedProduct: (state) => state.createdProduct,
    getRemovedProduct: (state) => state.removedProduct,
    getEditedProduct: (state) => state.editedProduct
};

export default {state, getters, mutations, actions};
