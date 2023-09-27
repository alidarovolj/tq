<template>
  <div class="w-full">
    <p class="text-sm mb-1 dark:text-darkText">{{ title }}</p>
    <select
        v-model="dataFilter"
        class="py-2 px-4 border rounded-md w-full bg-white dark:bg-darkInp dark:text-darkText text-sm"
        @change="getSearch"
    >
      <option :value="undefined">{{ placeholder }}</option>
      <option
          v-for="(option, index) of options"
          :key="index"
          :value="option.id"
      >
        {{ option.name }}
        <span v-if="option.branch">({{ option.branch.name }})</span>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  props: {
    placeholder: String,
    filterName: String,
    title: String,
    options: Array,
  },
  emits: ['apply_filter'],
  data() {
    return {
      dataFilter: null,
    };
  },
  created() {
    this.dataFilter = this.$route.query[`filters[${this.filterName}]`];
  },
  mounted() {
    window.addEventListener("popstate", this.popstateEvent);
  },
  beforeUnmount() {
    window.removeEventListener("popstate", this.popstateEvent);
  },
  methods: {
    popstateEvent() {
      this.dataFilter = this.$route.query[`filters[${this.filterName}]`];
    },
    blur(e) {
      if ([this.$refs.reset, this.$refs.submit].includes(e.relatedTarget)) {
        return;
      }
      this.dataFilter = this.$route.query[`filters[${this.filterName}]`];
    },
    async getSearch() {
      if (
          this.$route.query[`filters[${this.filterName}]`] === this.dataFilter ||
          (!this.$route.query[`filters[${this.filterName}]`] && !this.dataFilter)
      ) {
        return;
      }
      const queryFilter = `filters[${this.filterName}]`;
      await this.$router.push({
        query: {
          ...this.$route.query,
          page: 1,
          [queryFilter]: this.dataFilter,
        },
      });
      this.$emit("apply_filter");
    },
  },
};
</script>
