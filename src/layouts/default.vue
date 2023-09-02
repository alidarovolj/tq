<template>
  <div class="bg-white dark:bg-black">
    <Header/>
    <div class=" pt-28 bg-white dark:bg-black">
      <slot/>
    </div>
    <FooterBlock />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FooterBlock from "@/components/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    FooterBlock,
    Header
  }
};
</script>
  