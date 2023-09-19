import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/views/MainPage/index.vue";
import Category from "@/views/Categories/Details/index.vue"
import Products from "@/views/Products/Details/index.vue";
import AboutPage from "@/views/About/index.vue";
import ContactsPage from "@/views/Contacts/index.vue";
import NewsPage from "@/views/News/index.vue";
import SubCategory from "@/views/Categories/SubCategory/index.vue";
import Cart from "@/views/Cart/index.vue";
import Admin from "@/views/Admin/index.vue";
import AdminProducts from "@/views/Admin/Products/index.vue"
import AdminCategories from "@/views/Admin/Categories/index.vue"
import AdminOrders from "@/views/Admin/Orders/index.vue"
import AdminNews from "@/views/Admin/News/index.vue"
import Profile from "@/views/Profile/index.vue";
import NewsDetails from "@/views/News/Details/index.vue"
import AdminFeedback from "@/views/Admin/Feedback/index.vue"

const router = createRouter({
    history: createWebHistory(), routes: [{
        path: "/", name: "MainPage", component: MainPage
    }, {
        path: "/profile", name: "ProfilePage", meta: {requiresAuth: true}, component: Profile
    }, {
        path: "/about", name: "AboutPage", component: AboutPage
    }, {
        path: "/contacts", name: "ContactsPage", component: ContactsPage
    }, {
        path: "/news", name: "NewsPage", component: NewsPage, children: [{
            path: ":news_id", name: "NewsDetails", component: NewsDetails
        }]
    }, {
        path: "/categories/:cat_id", name: "Category", component: Category, children: [{
            path: "subcategory/:sub_id", name: "SubCategory", component: SubCategory
        }]
    }, {
        path: "/products/:prod_id", name: "Product", component: Products,
    }, {
        path: "/cart", name: "Cart", component: Cart,
    }, {
        path: "/admin", name: "AdminPage", meta: {requiresAuth: true}, component: Admin, children: [{
            path: "products", name: "AdminProducts", meta: {requiresAuth: true}, component: AdminProducts
        }, {
            path: "categories", name: "AdminCategories", meta: {requiresAuth: true}, component: AdminCategories
        }, {
            path: "orders", name: "AdminOrders", meta: {requiresAuth: true}, component: AdminOrders
        }, {
            path: "news", name: "AdminNews", meta: {requiresAuth: true}, component: AdminNews
        }, {
            path: "feedback", name: "AdminFeedback", meta: {requiresAuth: true}, component: AdminFeedback
        }]
    }],
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    const isAuthenticated = localStorage.getItem("token");
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next("/");
        } else {
            next();
        }
    } else {
        next();
    }
});


export default router;