<template>
  <div class="bg-whiteColor dark:bg-darkBg">
    <DefaultLayout v-if="$route.name !== 'AdminPage' && $route.name !== 'AdminProducts'">
      <router-view></router-view>
    </DefaultLayout>
    <AdminLayout v-else>
      <router-view></router-view>
    </AdminLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import "vue3-toastify/dist/index.css";

export default {
  name: "App",
  components: {
    DefaultLayout,
    AdminLayout
  },
  beforeCreate() {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (!localStorage.cart) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
    if (!localStorage.orderNumber) {
      const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        result += symbols.charAt(randomIndex);
      }
      localStorage.setItem('orderNumber', JSON.stringify(result))
    }

  },
  methods: {
    scrollTop() {
      document.getElementById('app').scrollIntoView();
    },
  }
};
</script>
