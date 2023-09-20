import axios from "@/utils/axios.js";
import router from "@/router/index.js";

const actions = {
    async news({commit}) {
        const {data} = await axios.get("/news", {
            params: router.currentRoute.value.query,
        });
        commit("updateNews", data);
    }, async newsDetails({commit}, id) {
        const {data} = await axios.get("/news/" + id, {
            params: router.currentRoute.value.query,
        });
        commit("updateNewsDetails", data);
    }, async createNews({commit}, form) {
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
        const {data} = await axios.post("/news/", form, {headers: headers});
        commit("updateCreatedNews", data);
    }, async removeNews({commit}, id) {
        const {data} = await axios.delete("/news/" + id);
        commit("updateRemovedNews", data);
    }, async editNews({commit}, {id, form}) {
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
        const {data} = await axios.post("/news/" + id, form, {headers: headers});
        commit("updateEditedNews", data);
    }, async viewIncrement({commit}) {
        const {data} = await axios.get("/news/view-increment", {
            params: router.currentRoute.value.query,
        });
        commit("updateViewIncrement", data);
    },
};
const mutations = {
    updateNews: (state, res) => {
        if (!Array.isArray(res.data)) {
            console.error("'res' is not an array");
            return;
        }
        const formattedTime = res.data.map((comment) => {
            const timestamp = new Date(comment.created_at);
            const formattedDate = timestamp.toLocaleDateString("en-GB", {
                year: "numeric", month: "2-digit", day: "2-digit",
            });
            const formattedTime = timestamp.toLocaleTimeString("en-GB", {
                hour: "2-digit", minute: "2-digit",
            });
            return {
                ...comment, created_at: `${formattedDate} ${formattedTime}`,
            };
        });
        res.data = formattedTime;

        state.news = res;
    }, updateCreatedNews: (state, res) => {
        state.createdNews = res;
    }, updateRemovedNews: (state, res) => {
        state.removedNews = res;
    }, updateEditedNews: (state, res) => {
        state.editedNews = res;
    }, updateNewsDetails: (state, res) => {
        console.log(res)
        const timestamp = new Date(res.data.created_at);
        const formattedDate = timestamp.toLocaleDateString("en-GB", {
            year: "numeric", month: "2-digit", day: "2-digit",
        });
        const formattedTime = timestamp.toLocaleTimeString("en-GB", {
            hour: "2-digit", minute: "2-digit",
        });
        res.data.created_at = `${formattedDate} ${formattedTime}`
        state.newsDetails = res;
    }, updateViewIncrement: (state, res) => {
        state.viewIncrement = res;
    },
};
const state = {
    news: null, createdNews: null, editedNews: null, removedNews: null, newsDetails: null, viewIncrement: null
};
const getters = {
    getNews: (state) => state.news,
    getCreatedNews: (state) => state.createdNews,
    getRemovedNews: (state) => state.removedNews,
    getEditedNews: (state) => state.editedNews,
    getNewsDetails: (state) => state.newsDetails
};

export default {state, getters, mutations, actions};
