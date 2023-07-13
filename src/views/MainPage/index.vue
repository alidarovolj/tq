<template>
  <div>
    <Hero />
    <About />
    <Steps />
    <Benefits />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Steps from "./components/Steps.vue";
import Benefits from "./components/Benefits.vue";

export default {
  name: "MainPage",
  components: {
    Hero,
    About,
    Steps,
    Benefits,
  },
};
</script>