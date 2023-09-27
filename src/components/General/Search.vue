<template>
  <div class="bg-white dark:text-darkText dark:bg-darkElBg rounded-md py-3 px-5">
    <form
        action="" class=""
        @submit.prevent="searchByFilter">
      <div class="w-full relative text-xs">
        <div class="w-full mb-3">
          <p class="mb-1">Название</p>
          <div class="block lg:flex justify-between">
            <input
                v-model="form['name']"
                class="py-2 px-4 border mb-3 lg:mb-0 rounded-md w-full bg-white dark:bg-darkInp dark:text-darkText mr-3"
                placeholder="Введите значение"
                type="text">
            <div
                class="flex items-center w-full lg:w-max px-20 mx-auto bg-mainColor text-white text-center rounded-md py-2 text-xs">
              <button class="w-full" type="submit">Поиск</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "SearchComponent",
  props: {
    placeholder: {
      type: Object,
      required: false
    }
  },
  emits: ["changed"],
  data() {
    return {
      search: null,
      dataFilter: null,
      currentFilters: [],
      form: {
        "name": null,
      }
    };
  },
  created() {
    this.search = this.$route.query.searchKeyword || "";
    this.populateFormFromQuery();
  },
  methods: {
    ...mapActions(['products']),
    searchByFilter() {
      this.currentFilters = [];
      Object.keys(this.form).forEach((el) => {
        const value = this.form[el];
        if (typeof value === 'string' && value.trim().length > 0) {
          this.currentFilters.push({name: el, value: value.trim()});
        }
      });
      this.getSearch();
    },
    async getSearch() {
      this.$route.query = null
      const query = {...this.$route.query, page: 1};
      this.currentFilters.forEach((el) => {
        const queryFilter = `fields[${el.name}]`;
        query[queryFilter] = el.value;
      });
      await this.$router.push({query});
      this.$emit("changed");
      this.products()
    },
    populateFormFromQuery() {
      Object.keys(this.form).forEach((el) => {
        const queryKey = el.includes(".") ? `filters[${el}]` : el;
        const queryFilter = `fields[${el}]`;
        if (this.$route.query[queryFilter]) {
          this.form[el] = this.$route.query[queryFilter];
        }
      });
    },
    resetSearch() {
      this.search = "";
      this.getSearch()
    },
  },
};
</script>
