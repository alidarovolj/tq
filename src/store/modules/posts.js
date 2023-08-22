import axios from "@/utils/axios.js";

const actions = {
    async posts({commit}) {
        const {data} = await axios.get("/posts");
        commit("updatePosts", data);
    },
};
const mutations = {
    updatePosts: (state, res) => {
        state.posts = res;
    },
};
const state = {
    posts: null,
};
const getters = {
    getPosts: (state) => state.posts,
};

export default {state, getters, mutations, actions};
