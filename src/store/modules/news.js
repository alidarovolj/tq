import axios from "@/utils/axios.js";

const actions = {
    async news({commit}) {
        const {data} = await axios.get("/news");
        commit("updateNews", data);
    },
};
const mutations = {
    updateNews: (state, res) => {
        state.news = res;
    },
};
const state = {
    news: null,
};
const getters = {
    getNews: (state) => state.news,
};

export default {state, getters, mutations, actions};
