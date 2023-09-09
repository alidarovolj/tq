<template>
  <div>
    <HeroComponent/>
    <About/>
    <Catalog/>
  </div>
</template>

<script>
import HeroComponent from "@/views/MainPage/components/Hero.vue";
import Catalog from "@/views/MainPage/components/Catalog.vue";
import About from "@/views/MainPage/components/About.vue";

export default {
  name: "MainPage",
  components: {About, Catalog, HeroComponent},
};
</script>