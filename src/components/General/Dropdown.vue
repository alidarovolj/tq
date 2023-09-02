<template>
  <div class=" p-2 lg:p-0 !text-xs dropDBack relative">
    <div
        class="flex items-center lg:block p-0 lg:p-2 hover:bg-secondaryColor hover:dark:text-darkText transition-all hover:bg-opacity-10 lg:hover:text-secondaryColor rounded-md"
        @click="isOpen = !isOpen"
    >
      <div class="flex items-center justify-center">
        <button class="rounded text-lg lg:text-xs">
          {{ text }}
        </button>
        <font-awesome-icon
            :class="{ 'rotate-180': isOpen }"
            :icon="['fas', 'chevron-down']"
            class="transition-all dark:text-darkText ml-1"
        />
      </div>
    </div>
    <div
        v-if="isOpen"
        class="w-full pt-2 lg:pt-0 absolute bg-white border-0 lg:border dark:bg-darkBg dark:lg:bg-darkElBg text-black lg:text-[#5e5873] dark:text-darkText top-full left-0 lg:right-0 rounded shadow-lg z-50"
    >
      <div
          class="w-full no-underline transition-all items-center text-black lg:text-[#5e5873] dark:text-darkText whitespace-nowrap">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownBlock",
  props: {
    text: {
      type: Object,
      required: false,
    }
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    handleOutsideClick(event) {
      if (this.isOpen && !this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
};
</script>
