import axios from "@/utils/axios.js";

const actions = {
    async news({commit}) {
        const {data} = await axios.get("/news");
        commit("updateNews", data);
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
        res = formattedTime;

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
