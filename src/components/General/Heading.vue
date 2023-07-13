<template>
  <div class="mb-10 dark:text-white">
    <h2 :class="{ 'mb-3': text }" class="font-bold text-3xl">{{ heading }}</h2>
    <div v-if="text">
      <div class="w-24 mb-3 h-1 bg-mainColor"></div>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>