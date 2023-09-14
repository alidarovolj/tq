import axios from "@/utils/axios.js";
import router from "@/router/index.js";

const actions = {
    async orders({commit}) {
        const {data} = await axios.get("/orders", {
            params: router.currentRoute.value.query,
        });
        commit("updateOrders", data);
    },
};
const mutations = {
    updateOrders: (state, res) => {
        state.orders = res;
    },
};
const state = {
    orders: null,
};
const getters = {
    getOrders: (state) => state.orders,
};

export default {state, getters, mutations, actions};
