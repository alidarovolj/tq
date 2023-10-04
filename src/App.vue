<template>
  <metainfo>
    <template #title="{ content }">{{
        content ? `${content} | TrustQuality` : `SITE_NAME`
      }}
    </template>
  </metainfo>
  <div class="bg-whiteColor dark:bg-darkBg">
    <DefaultLayout
        v-if="$route.name !== 'AdminPage' && $route.name !== 'AdminProducts' && $route.name !== 'AdminCategories' && $route.name !== 'AdminOrders' && $route.name !== 'AdminNews' && $route.name !== 'AdminFeedback'">
      <router-view :key="$route.fullPath"></router-view>
    </DefaultLayout>
    <AdminLayout v-else>
      <router-view :key="$route.fullPath"></router-view>
    </AdminLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import "vue3-toastify/dist/index.css";
import {useMeta} from "vue-meta";

export default {
  name: "App",
  components: {
    DefaultLayout,
    AdminLayout
  },
  setup() {
    useMeta({
      title: "TrustQuality",
      htmlAttrs: {lang: "en", amp: true},
    });
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
