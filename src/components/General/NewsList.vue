<template>
  <div v-if="$route.name !== 'NewsPage'" class="mt-10">
    <div v-if="getNews" class="container mx-auto px-4 lg:px-0">
      <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Новости компании</h2>
      <carousel :breakpoints="breakpoints" v-bind="settings">
        <slide
            v-for="(item, index) in getNews.data"
            :key="index"
            class="bg-white relative flex flex-col dark:bg-darkBgColor dark:text-whiteColor justify-between mr-3 mb-3 p-4 rounded-2xl cursor-pointer shadow transition-all"
            @click="$router.push({ name: 'NewsDetails', params: { 'news_id' : item.id } })">
          <img :src="item.img" alt="" class="w-full rounded-t-xl h-32 object-cover">
          <div class="p-5">
            <div class="mb-5">
              <p v-if="$i18n.locale === 'ru'" class="font-semibold mb-3">{{ item.title }}</p>
              <p v-else class="font-semibold mb-3">{{ item.title }}</p>
              <p v-if="$i18n.locale === 'ru'">{{ item.description }}</p>
              <p>{{ item.description_kz }}</p>
            </div>
          </div>
          <div class="w-full flex justify-between text-xs">
            <div class="flex items-center mr-3">
              <font-awesome-icon :icon="['fas', 'eye']" class="mr-2 text-xl"/>
              <p>{{ item.views }}</p>
            </div>
            <div class="flex items-center">
              <font-awesome-icon :icon="['fas', 'clock']" class="mr-2 text-xl"/>
              <p>{{ item.created_at }}</p>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation/>
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import {Carousel, Navigation, Slide} from "vue3-carousel";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "NewsList",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  computed: {
    ...mapGetters(['getNews'])
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
      },
    }
  },
  mounted() {
    this.news()
  },
  methods: {
    ...mapActions(['news'])
  }
}
</script>