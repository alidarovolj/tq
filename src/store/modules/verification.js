import axios from "@/utils/axios.js";
import router from "@/router/index.js";

const actions = {
    async sendMessage({commit}) {
        const {data} = await axios.get("/send-message", {
            params: router.currentRoute.value.query,
        });
        commit("updateSentMessage", data);
    }, async validatePhone({commit}, form) {
        const {data} = await axios.post("/validate-phone/", form);
        commit("updateValidatedPhone", data);
    },
};
const mutations = {
    updateSentMessage: (state, res) => {
        state.sentMessage = res;
    }, updateValidatedPhone: (state, res) => {
        state.validatedPhone = res;
    },
};
const state = {
    sentMessage: null, validatedPhone: null,
};
const getters = {
    getSentMessage: (state) => state.sentMessage, getValidatedPhone: (state) => state.validatedPhone
};

export default {state, getters, mutations, actions};
