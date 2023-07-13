<template>
  <p class="px-9 py-4 rounded-2xl bg-mainColor text-white cursor-pointer">{{ text }}</p>
</template>

<script>
export default {
  name: "Button",
  props: ["text"],
};
</script>