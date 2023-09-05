<template>
  <select
      id=""
      v-model="currentLang"
      class="border rounded-md px-2 lg:px-4 py-1 lg:py-2 cursor-pointer dark:bg-darkBg dark:text-whiteColor text-xs"
      name=""
      @change="switchLocale($event)"
  >
    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.value" class="px-5 py-2">
      {{ lang.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  beforeCreate() {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      this.$i18n.locale = savedLocale;
    } else {
      localStorage.setItem("locale", "ru");
    }
  },
  methods: {
    switchLocale(event) {
      localStorage.setItem("locale", event.target.value);
      this.$i18n.locale = event.target.value;
    },
  },
  data() {
    return {
      currentLang: localStorage.getItem("locale"),
      langs: [
        {
          id: 1,
          value: "ru",
          title: "RU",
        },
        {
          id: 2,
          value: "kz",
          title: "KZ",
        },
      ],
    };
  }
}
</script>