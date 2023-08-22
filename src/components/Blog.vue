<template>
  <section>
    <div class="container mx-auto px-4 lg:px-0">
      <Heading
          heading="Небольшой блог"
          text="В данном разделе мы делимся своими мыслями в мире разработки сайтов и обсуждаем новые технологии."
      />
      <div v-if="getPosts">
        <div
            class="w-full h-[400px] rounded-2xl relative"
            v-for="(post, index) of getPosts.data"
            :key="index"
        >
          <img
              class="w-full object-cover h-full rounded-2xl"
              :src="post.imageUrl"
              alt=""
          />
          <div
              class="w-full h-full bg-black opacity-50 absolute left-0 top-0 rounded-2xl"
          ></div>
          <div
              class="left-0 text-white top-0 p-5 absolute flex flex-col h-full justify-between"
          >
            <p class="font-bold">{{ post.title }}</p>
            <p class="h-[200px] overflow-y-auto text-xs" v-html="post.content"></p>
            <router-link :to="{ name: 'BlogPage', params: { blog: post.url } }"
                         class="px-9 py-4 rounded-2xl bg-mainColor text-white cursor-pointer w-max">
              Узнать больше
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

import Heading from "@/components/General/Heading.vue";
import Button from "@/components/General/Button.vue";

export default {
  name: "Blog",
  components: {
    Heading,
    Button,
  },
  computed: {
    ...mapGetters(["getPosts"]),
  },
  methods: {
    ...mapActions(["posts"]),
  },
  mounted() {
    this.posts();
  },
};
</script>