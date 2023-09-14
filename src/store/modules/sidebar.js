const actions = {
    openSidebar({commit}) {
        commit("updateSidebar");
    }, setSidebarMob({commit}) {
        commit("updateSidebarMob");
    },
};

const mutations = {
    updateSidebar: (state) => {
        state.sidebar = !state.sidebar;
    }, updateSidebarMob(state) {
        state.sidebarState = !state.sidebarState;
    },
};

const state = {
    sidebar: localStorage.getItem("sidebar") === "true", sidebarState: false,
};

const getters = {
    getSidebar: (state) => state.sidebar, getSidebarMob: (state) => {
        return state.sidebarState;
    },
};

export default {state, getters, mutations, actions};
