<template>
  <div class="pt-24 lg:pt-10">
    <div v-if="getNewsDetails" class="container mx-auto px-4 lg:px-0">
      <h1 v-if="$i18n.locale === 'ru'" class="text-2xl font-semibold mb-10 dark:text-whiteColor">
        {{ getNewsDetails.data.title }}</h1>
      <h1 v-else class="text-2xl font-semibold mb-10 dark:text-whiteColor">{{ getNewsDetails.data.title_kz }}</h1>
      <img :src="getNewsDetails.data.img" alt="" class="w-1/2 mx-auto mb-4">
      <div class="w-1/2 mx-auto flex items-center justify-between mb-4 dark:text-whiteColor">
        <div class="flex items-center mr-3">
          <font-awesome-icon :icon="['fas', 'eye']" class="mr-2 text-xl"/>
          <p>{{ getNewsDetails.data.views }}</p>
        </div>
        <div class="flex items-center">
          <font-awesome-icon :icon="['fas', 'clock']" class="mr-2 text-xl"/>
          <p>{{ getNewsDetails.data.created_at }}</p>
        </div>
      </div>
      <div class=" dark:text-whiteColor" v-if="$i18n.locale === 'ru'" v-html="getNewsDetails.data.content"></div>
      <div class=" dark:text-whiteColor" v-else v-html="getNewsDetails.data.content_kz"></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {useMeta} from "vue-meta";

export default {
  name: "AdminNews",
  setup() {
    useMeta({title: "Новость"});
  },
  computed: {
    ...mapGetters(['getNewsDetails'])
  },
  async mounted() {
    await this.newsDetails(this.$route.params.news_id);
    await this.$router.push({
      query: {
        ...this.$route.query,
        news_id: this.$route.params.news_id
      },
    });
    this.viewIncrement()
  },
  methods: {
    ...mapActions(['newsDetails', 'viewIncrement']),
  }
}
</script>