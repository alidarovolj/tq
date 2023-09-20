import axios from "@/utils/axios.js";
import router from "@/router/index.js";

const actions = {
    async products({commit}) {
        const {data} = await axios.get("/products/", {
            params: router.currentRoute.value.query,
        });
        commit("updateProducts", data);
    }, async product({commit}, id) {
        const {data} = await axios.get("/products/" + id);
        commit("updateProduct", data);
    }, async sameProducts({commit}, id) {
        const {data} = await axios.get("/products/same-products/" + id);
        commit("updateSameProducts", data);
    }, async createProduct({commit}, form) {
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
        const {data} = await axios.post("/products", form, {headers: headers});
        commit("updateCreatedProduct", data);
    }, async removeProduct({commit}, id) {
        const {data} = await axios.delete("/products/" + id);
        commit("updateRemovedProduct", data);
    }, async editProduct({commit}, {id, form}) {
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
        const {data} = await axios.post("/products/" + id, form, {headers: headers});
        commit("updateEditedProduct", data);
    }, async confirmProduct({commit}, {conf_state, id}) {
        const {data} = await axios.patch("/products/" + id + "/status?status=" + conf_state);
        commit("updateConfirmedProduct", data);
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
    }, updateConfirmedProduct: (state, res) => {
        state.confirmedProduct = res;
    },
};
const state = {
    products: null, product: null, sameProducts: null, createdProduct: null, removedProduct: null, editedProduct: null, confirmedProduct: null,
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
