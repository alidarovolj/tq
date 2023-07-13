<template>
  <section class="mt-20">
    <div class="container mx-auto px-4 lg:px-0 dark:text-darkText">
      <div class="block lg:flex justify-between">
        <div
          class="w-full lg:w-1/2 flex flex-col justify-between mb-10 lg:mb-0"
        >
          <div>
            <h1 class="text-4xl lg:text-5xl font-semibold">
              <span
                v-if="$i18n.locale == 'kz'"
                class="text-mainColor font-bold"
                >{{ $t("mainPage.hero.city") }}</span
              >
              <p>{{ $t("mainPage.hero.header") }}</p>
              <span
                v-if="$i18n.locale != 'kz'"
                class="text-mainColor font-bold"
                >{{ $t("mainPage.hero.city") }}</span
              >
            </h1>
            <p class="my-5">
              {{ $t("mainPage.hero.paragraph") }}
            </p>
          </div>
          <div class="flex flex-wrap mb-5">
            <p
              v-for="(item, index) of keywords"
              :key="index"
              class="rounded-full px-5 py-3 hover:text-white bg-secondaryColor dark:bg-darkBg dark:border-darkBg hover:dark:bg-mainColor hover:bg-mainColor border border-secondaryColor mb-3 mr-3 cursor-pointer transition-all"
            >
              {{ item }}
            </p>
          </div>
          <div class="relative">
            <div>
              <input
                class="!pl-14 dark:bg-darkBg dark:border-darkBg"
                type="text"
                :placeholder="$t('mainPage.hero.input')"
              />
              <font-awesome-icon
                class="absolute left-5 top-1/2 -translate-y-1/2"
                :icon="['fas', 'magnifying-glass']"
              />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3">
          <SendMessage />
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
import SendMessage from "@/components/SendMessage.vue";

export default {
  name: "HeroBlock",
  data() {
    return {
      keywords: [
        "VueJS",
        "Laravel",
        "PHP",
        "Python",
        "NodeJS",
        "Django",
        "1C",
        "ReactJS",
        "NextJS",
        "GatsbyJS",
      ],
    };
  },
  components: {
    SendMessage,
  },
};
</script>