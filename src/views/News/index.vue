<template>
  <div v-if="isSingleNewsRoute">
    <router-view></router-view>
  </div>
  <div v-else class="pt-24 lg:pt-10">
    <div>
      <div v-if="getNews" class="container mx-auto px-4 lg:px-0">
        <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Новости компании</h2>
        <router-link :to="{ name: 'NewsDetails', params: { news_id: getNews.data[0].id } }"
                     class="w-full block lg:flex rounded-xl mb-10 bg-white dark:bg-darkBgColor text-blackColor dark:text-white shadow-lg">
          <img :src="getNews.data[0].img" alt="" class="w-full lg:w-1/3 rounded-l-xl">
          <div class="w-full lg:w-2/3 p-5 flex flex-col justify-between">
            <div class="mb-5">
              <p class="font-semibold mb-3 text-xl">{{ getNews.data[0].title }}</p>
              <p class="no-underline">{{ getNews.data[0].description }}</p>
            </div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <font-awesome-icon :icon="['fas', 'eye']" class="mr-2 text-xl"/>
                <p>{{ getNews.data[0].views }}</p>
              </div>
              <div class="flex items-center">
                <font-awesome-icon :icon="['fas', 'clock']" class="mr-2 text-xl"/>
                <p>{{ getNews.data[0].created_at }}</p>
              </div>
            </div>
          </div>
        </router-link>
        <carousel :breakpoints="breakpoints" v-bind="settings">
          <slide
              v-for="(item, index) in getNews.data"
              :key="index"
              class="bg-white relative flex flex-col dark:bg-darkBgColor dark:text-whiteColor justify-between mr-3 mb-3 p-4 rounded-2xl cursor-pointer shadow transition-all">
            <img :src="item.img" alt="" class="w-full rounded-t-xl h-32 object-cover">
            <div class="p-5">
              <div class="mb-5">
                <p class="font-semibold mb-3">{{ item.title }}</p>
                <p>{{ item.description }}</p>
              </div>
            </div>
            <div class="flex justify-between text-xs">
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
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {useMeta} from "vue-meta";
import {Carousel, Navigation, Slide} from "vue3-carousel";
import {useRoute} from "vue-router";

export default {
  name: "NewsPage",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    useMeta({title: "Новости"});
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
      links: [
        {
          name: "Главная",
          to: {name: "MainPage"},
        },
        {
          name: "Продукты",
          to: {name: "Product", params: {prod_id: this.$route.params.prod_id}},
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getNews']),
    isSingleNewsRoute() {
      const route = useRoute();
      return route.name === "NewsDetails";
    },
  },
  mounted() {
    this.news()
  },
  methods: {
    ...mapActions(['news'])
  }
}
</script>