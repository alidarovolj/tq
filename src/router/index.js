import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/views/MainPage/index.vue";
import Category from "@/views/Categories/Details/index.vue"
import Products from "@/views/Products/Details/index.vue";
import AboutPage from "@/views/About/index.vue";
import ContactsPage from "@/views/Contacts/index.vue";
import NewsPage from "@/views/News/index.vue";
import SubCategory from "@/views/Categories/SubCategory/index.vue";
import Cart from "@/views/Cart/index.vue";

const router = createRouter({
    history: createWebHistory(), routes: [{
        path: "/", name: "MainPage", component: MainPage
    }, {
        path: "/about", name: "AboutPage", component: AboutPage
    }, {
        path: "/contacts", name: "ContactsPage", component: ContactsPage
    }, {
        path: "/news", name: "NewsPage", component: NewsPage
    }, {
        path: "/categories/:cat_id", name: "Category", component: Category, children: [{
            path: "subcategory/:sub_id", name: "SubCategory", component: SubCategory
        }]
    }, {
        path: "/products/:prod_id", name: "Product", component: Products,
    }, {
        path: "/cart", name: "Cart", component: Cart,
    }],
});

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = localStorage.getItem("token");
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//         if (!isAuthenticated) {
//             next("/auth");
//         } else {
//             next();
//         }
//     } else if (to.matched.some((record) => record.path === "/auth")) {
//         if (isAuthenticated) {
//             next("/");
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });
router.beforeEach((to, from, next) => {
    // Scroll to the top of the page when navigating to a new route
    window.scrollTo(0, 0);
    next();
});


export default router;