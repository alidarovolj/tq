<template>
  <div class="bg-white dark:bg-black">
    <DefaultLayout>
      <router-view></router-view>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default.vue";
import "vue3-toastify/dist/index.css";

export default {
  name: "App",
  components: {
    DefaultLayout,
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
  },
  methods: {
    scrollTop() {
      document.getElementById('app').scrollIntoView();
    },
  }
};
</script>
