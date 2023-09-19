import axios from "@/utils/axios.js";

const actions = {
    async feedback({commit}) {
        const {data} = await axios.get("/feedback");
        commit("updateFeedback", data);
    }, async createFeedback({commit}, form) {
        const {data} = await axios.post("/feedback", form);
        commit("updateCreatedFeedback", data);
    },
};
const mutations = {
    updateFeedback: (state, res) => {
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
        state.feedback = res;
    }, updateCreatedFeedback: (state, res) => {
        state.createdFeedback = res;
    }
};
const state = {
    feedback: null, createdFeedback: null,
};
const getters = {
    getFeedback: (state) => state.feedback
};

export default {state, getters, mutations, actions};
