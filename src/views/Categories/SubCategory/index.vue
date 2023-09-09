<template>
  <div class="py-24">
    <div v-if="getCategory" class="container mx-auto px-4 lg:px-0">
      <BreadcrumbsComponent :get-links="links" class="mb-4"/>
      <div v-if="getCategory.data.sub_category_limitless.length > 0">
        <h1 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Подкатегории категории: {{
            getCategory.data.name
          }}</h1>
        <div class=" mb-10">
          <div class="flex items-center flex-wrap justify-between">
            <div v-for="(item, index) of getCategory.data.sub_category_limitless"
                 :key="index"
                 class="w-full lg:w-fourth flex flex-col justify-between bg-white rounded-2xl p-4 mb-2 hover:bg-mainColor transition-all cursor-pointer hover:text-white">
              <img :src="item.icon" alt="" class="w-32 h-32 mx-auto object-contain">
              <p class=" text-center font-semibold">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="getCategory.data.products_limitless.length <= 0">
        <h1 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Продукты категории</h1>
        <div class="relative">
          <div v-for="(category, categoryIndex) in getCategory.data.sub_category_limitless" :key="categoryIndex"
               class="flex">
            <div v-if="category.products_limitless.length > 0" class="mb-10">
              <p class="text-xl font-semibold mb-5 dark:text-whiteColor">Подкатегория: <span
                  class="font-semibold">{{ category.name }}</span></p>
              <div class="flex flex-wrap">
                <ProductsList :data="category.products_limitless"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="">
        <h1 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Продукты категории: {{
            getCategory.data.name
          }}</h1>
        <div class="relative">
          <div class="flex flex-wrap">
            <ProductsList :data="getCategory.data.products_limitless"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import BreadcrumbsComponent from "@/components/General/Breadcrumbs.vue";
import ProductsList from "@/components/General/ProductsList.vue";

export default {
  name: "SubCategory",
  components: {ProductsList, BreadcrumbsComponent},
  data() {
    return {
      links: [
        {
          name: "Главная",
          to: {name: "MainPage"},
        },
        {
          name: "Категории",
          to: {name: "MainPage"},
        }
      ],
      prev_category: null,
    }
  },
  computed: {
    ...mapGetters(['getCategory']),
  },
  async mounted() {
    await this.category(this.$route.params.cat_id)
    this.prev_category = this.getCategory.data.name
    await this.category(this.$route.params.sub_id)
    this.links.push({
      name: this.prev_category,
      to: {name: 'Category', params: {cat_id: this.$route.params.cat_id}}
    })
    this.links.push({
      name: this.getCategory.data.name,
      to: {name: 'SubCategory', params: {cat_id: this.$route.params.cat_id, sub_id: this.$route.params.sub_id}}
    })
  },
  methods: {
    ...mapActions(['category'])
  }
}
</script>