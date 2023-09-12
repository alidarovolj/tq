<template>
  <div class="pt-24 lg:pt-10">
    <div>
      <div class="container mx-auto px-4 lg:px-0">
        <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Новости компании</h2>
        <div
            class="w-full block lg:flex rounded-xl mb-10 bg-white dark:bg-darkBgColor text-blackColor dark:text-white shadow-lg">
          <img :src="getNews.data.data[0].img" alt="" class="w-full rounded-l-xl">
          <div class="p-5 flex flex-col justify-between">
            <div class="mb-5">
              <p class="font-semibold mb-3">{{ getNews.data.data[0].title }}</p>
              <p>{{ getNews.data.data[0].description }}</p>
            </div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <font-awesome-icon :icon="['fas', 'eye']" class="mr-2 text-xl"/>
                <p>{{ getNews.data.data[0].views }}</p>
              </div>
              <div class="flex items-center">
                <font-awesome-icon :icon="['fas', 'clock']" class="mr-2 text-xl"/>
                <p>{{ getNews.data.data[0].date }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="block lg:flex justify-between">
          <div v-for="(item, index) of getNews.data.data" :key="index"
               class="w-full mb-4 lg:mb-0 lg:w-third flex flex-col justify-between rounded-xl bg-white dark:bg-darkBgColor text-blackColor dark:text-white shadow-lg">
            <img :src="item.img" alt="" class="w-full rounded-t-xl">
            <div class="p-5">
              <div class="mb-5">
                <p class="font-semibold mb-3">{{ item.title }}</p>
                <p>{{ item.description }}</p>
              </div>
              <div class="flex justify-between">
                <div class="flex items-center">
                  <font-awesome-icon :icon="['fas', 'eye']" class="mr-2 text-xl"/>
                  <p>{{ item.views }}</p>
                </div>
                <div class="flex items-center">
                  <font-awesome-icon :icon="['fas', 'clock']" class="mr-2 text-xl"/>
                  <p>{{ item.date }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "NewsPage",
  computed: {
    ...mapGetters(['getNews'])
  },
  mounted() {
    this.news()
  },
  methods: {
    ...mapActions(['news'])
  }
}
</script>