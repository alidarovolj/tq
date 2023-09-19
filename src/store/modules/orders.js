import axios from "@/utils/axios.js";
import router from "@/router/index.js";

const actions = {
    async orders({commit}) {
        const {data} = await axios.get("/orders", {
            params: router.currentRoute.value.query,
        });
        commit("updateOrders", data);
    }, async confirmOrder({commit}, {conf_state, id}) {
        const {data} = await axios.patch("/orders/" + id + "/status?status=" + conf_state);
        commit("updateConfirmedOrder", data);
    },
};
const mutations = {
    updateOrders: (state, res) => {
        state.orders = res;
    }, updateConfirmedOrder: (state, res) => {
        state.confirmedOrder = res;
    },
};
const state = {
    orders: null, confirmedOrder: null,
};
const getters = {
    getOrders: (state) => state.orders, getConfirmedOrder: (state) => state.confirmedOrder
};

export default {state, getters, mutations, actions};
