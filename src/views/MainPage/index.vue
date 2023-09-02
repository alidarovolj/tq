<template>
  <div>
    <HeroComponent/>
    <About/>
    <Catalog/>
    <ContactsBlock/>
  </div>
</template>

<script>
import HeroComponent from "@/views/MainPage/components/Hero.vue";
import Catalog from "@/views/MainPage/components/Catalog.vue";
import About from "@/views/MainPage/components/About.vue";
import ContactsBlock from "@/views/MainPage/components/Contacts.vue";

export default {
  name: "MainPage",
  components: {ContactsBlock, About, Catalog, HeroComponent},
};
</script>