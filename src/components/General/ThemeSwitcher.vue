<template>
  <font-awesome-icon
      v-if="currentTheme === 'light'"
      :icon="['fas', 'sun']"
      class="ml-4 text-whiteColor bg-mainColor rounded-md p-2 cursor-pointer"
      @click="setTheme('dark')"
  />
  <font-awesome-icon
      v-else
      :icon="['fas', 'moon']"
      class="ml-4 text-whiteColor bg-mainColor rounded-md p-2 cursor-pointer"
      @click="setTheme('light')"
  />
</template>

<script>
export default {
  name: "ThemeSwitcher",
  data() {
    return {
      currentTheme: localStorage.getItem("theme"),
    };
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem("theme", theme);
      document.querySelector("html").classList.add(theme);
      document
          .querySelector("html")
          .classList.remove(theme === "light" ? "dark" : "light");
      this.currentTheme = theme;
    },
  }
}
</script>