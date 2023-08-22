import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/views/MainPage/index.vue";
import BlogPage from "@/views/BlogSingle.vue";
import Registration from "@/views/Registration/index.vue";
import Login from "@/views/Login/index.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "MainPage",
            component: MainPage,
        },
        {
            path: "/blog/:blog",
            name: "BlogPage",
            component: BlogPage,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/registration",
            name: "Registration",
            component: Registration,
        },
    ],
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("token");
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next("/auth");
        } else {
            next();
        }
    } else if (to.matched.some((record) => record.path === "/auth")) {
        if (isAuthenticated) {
            next("/");
        } else {
            next();
        }
    } else {
        next();
    }
});


export default router;