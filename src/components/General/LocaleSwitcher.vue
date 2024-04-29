<template>
  <div class="relative" @click="isOpen = !isOpen" ref="dropdown">
    <div class="flex items-center justify-center p-2 cursor-pointer">
      <img :src="currentLang.img" alt="" class="w-6 h-6 mr-2 object-contain">
      {{ currentLang.title }}
    </div>
    <div v-if="isOpen" class="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md z-[1000]">
      <div
          v-for="(lang, i) in langs"
          :key="`Lang${i}`"
          @click="switchLocale(lang.value)"
          :class="{ 'bg-gray-200': lang.value === currentLang.value }"
          class="cursor-pointer flex items-center justify-center p-2"
      >
        <img :src="lang.img" alt="" class="w-6 h-6 mr-2 object-contain">
        {{ lang.title }}
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/img/flags/ru.webp";
import img2 from "@/assets/img/flags/kz.png";
import img3 from "@/assets/img/flags/en.png";

export default {
  name: "ThemeSwitcher",
  data() {
    return {
      isOpen: false,
      currentLang: {
        value: "ru",
        title: "RU",
        img: img1,
      },
      langs: [
        {
          value: "ru",
          title: "RU",
          img: img1,
        },
        {
          value: "kz",
          title: "KZ",
          img: img2,
        },
        {
          value: "en",
          title: "EN",
          img: img3,
        },
      ],
    };
  },
  mounted() {
    this.initializeLocale();
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    initializeLocale() {
      const savedLocale = localStorage.getItem("locale");
      if (savedLocale) {
        this.currentLang = this.langs.find(lang => lang.value === savedLocale) || this.langs[0];
        this.$i18n.locale = savedLocale;
      } else {
        localStorage.setItem("locale", "ru");
      }
    },
    switchLocale(locale) {
      const selectedLang = this.langs.find(lang => lang.value === locale);
      if (selectedLang) {
        this.currentLang = selectedLang;
        this.isOpen = false;
        localStorage.setItem("locale", locale);
        this.$i18n.locale = locale;
      }
    },
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
