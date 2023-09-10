<template>
  <div v-if="getCategoriesWithProducts" class="container mx-auto px-4 lg:px-0 mb-20 lg:mb-0">
    <div class="block lg:flex justify-between">
      <div class="w-full lg:w-1/4 mr-4 relative">
        <div class="shadow sticky top-44">
          <div
              class="text-center py-2 bg-blackColor dark:bg-darkBgColor dark:text-whiteColor dark:border-b dark:border-gray-700 text-white rounded-t-lg">
            <p>Каталог товаров</p>
          </div>
          <div class="rounded-b-lg">
            <div v-for="(item, index) of getCategoriesWithProducts.data" :key="index"
                 :class="{ 'mb-3 rounded-b-lg' : index + 1 === getCategoriesWithProducts.data.length }"
                 class="relative bg-white flex items-center justify-between px-2 py-1 cursor-pointer dark:text-whiteColor hover:bg-mainColor hover:text-whiteColor transition-all dark:bg-darkBgColor dark:hover:bg-mainColor"
                 @mouseleave="openedTab = null"
                 @mouseover="openedTab = index">
              <div class="flex items-center">
                <img :src="item.icon" alt="" class="w-10 h-10 object-contain mr-2">
                <p v-if="$i18n.locale === 'ru'">{{ item.name }}</p>
                <p v-else>{{ item.name_kz }}</p>
              </div>
              <font-awesome-icon :icon="['fas', 'chevron-right']"/>
              <div
                  v-if="openedTab === index"
                  class="absolute left-full h-max w-full z-50 overflow-y-hidden top-0 shadow-lg">
                <div
                    v-for="(it, ind) of item.sub_category" v-if="openedTab === index" :key="ind"
                    class="flex items-center dark:bg-darkBgColor dark:hover:bg-mainColor hover:bg-mainColor text-blackColor hover:text-whiteColor bg-white overflow-y-hidden p-2"
                    @mouseover="openedTab = index">
                  <img :src="it.icon" alt="" class="w-10 h-10 object-contain mr-2">
                  <p v-if="$i18n.locale === 'ru'">{{ it.name }}</p>
                  <p v-else>{{ it.name_kz }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-3/4">
        <div class="mb-10">
          <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Популярные категории</h2>
          <div class="flex justify-between flex-wrap">
            <router-link v-for="(item, index) of getCategoriesWithProducts.data"
                         :key="index"
                         :to="{ name: 'Category', params: { cat_id: item.id } }"
                         class="w-half dark:bg-darkBgColor dark:text-whiteColor lg:w-fourth mb-2 bg-white p-4 rounded-2xl cursor-pointer hover:bg-mainColor hover:text-whiteColor transition-all">
              <img :src="item.icon" alt="" class="w-32 h-32 mx-auto object-contain">
              <p v-if="$i18n.locale === 'ru'" class="text-center font-semibold">{{ item.name }}</p>
              <p v-else class="text-center font-semibold">{{ item.name_kz }}</p>
            </router-link>
          </div>
        </div>
        <div class="relative">
          <div
              :class="{ 'max-h-[500px] h-[500px]' : !openedBlock }" class="overflow-y-hidden">
            <div v-for="(item, index) of getCategoriesWithProducts.data" :key="index" class="mb-10">
              <h2 v-if="$i18n.locale === 'ru'" class="text-2xl font-semibold mb-10 dark:text-whiteColor">{{
                  item.name
                }}</h2>
              <h2 v-else class="text-2xl font-semibold mb-10 dark:text-whiteColor">{{ item.name }}</h2>
              <div
                  v-for="(it, ind) of item.sub_category"
                  :key="ind"
                  class="flex justify-between w-full overflow-x-auto">
                <ProductsList :data="it.products"/>
              </div>
            </div>
          </div>
          <p
              class="absolute left-1/2 -translate-x-1/2 translate-y-full -bottom-5 bg-blackColor cursor-pointer dark:bg-white dark:text-blackColor text-center px-3 py-2 text-whiteColor rounded-md w-full lg:w-half"
              @click="openedBlock = !openedBlock">
            <span v-if="openedBlock === false">Открыть полностью</span>
            <span v-else>Закрыть</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import ProductsList from "@/components/General/ProductsList.vue";

export default {
  name: "CatalogComponent",
  components: {ProductsList},
  computed: {
    ...mapGetters(['getCategoriesWithProducts'])
  },
  mounted() {
    this.categoriesWithProducts()
  },
  methods: {
    ...mapActions(['categoriesWithProducts'])
  },
  data() {
    return {
      openedTab: null,
      openedBlock: false,
    }
  }
}
</script>