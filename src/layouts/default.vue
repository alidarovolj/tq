<template>
  <div>
    <Header />
    <div class="pt-10">
      <slot />
    </div>
    <Blog />
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Blog from "@/components/Blog.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
    Blog,
  },
};
</script>
  