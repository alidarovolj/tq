<template>
  <div v-if="getCategoriesWithProducts && getCatalogList" class="container mx-auto px-4 lg:px-0 mb-20 lg:mb-0">
    <div class="block lg:flex justify-between">
      <div class="w-full lg:w-1/4 mr-4 relative">
        <div class="shadow sticky top-44">
          <div
              class="text-center py-2 bg-blackColor dark:bg-darkBgColor dark:text-whiteColor dark:border-b dark:border-gray-700 text-white rounded-t-lg">
            <p>{{ $t('mainPage.catalog.header') }}</p>
          </div>
          <div class="rounded-b-lg">
            <div v-for="(item, index) of getCatalogList.data"
                 :key="index" :class="{ 'mb-3 rounded-b-lg' : index + 1 === getCatalogList.data.length }"
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
                  class="static lg:absolute left-full h-max w-full z-50 overflow-y-hidden top-0 shadow-lg">
                <router-link
                    v-for="(it, ind) of item.sub_category"
                    v-if="openedTab === index" :key="ind" :to="{ name: 'Category', params: { cat_id: it.id } }"
                    class="flex items-center dark:bg-darkBgColor dark:hover:bg-mainColor hover:bg-mainColor text-blackColor dark:text-whiteColor hover:text-whiteColor bg-white overflow-y-hidden p-2"
                    @mouseover="openedTab = index">
                  <img :src="it.icon" alt="" class="w-10 h-10 object-contain mr-2">
                  <p v-if="$i18n.locale === 'ru'">{{ it.name }}</p>
                  <p v-else>{{ it.name_kz }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-3/4">
        <div class="mb-10">
          <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">{{ $t('mainPage.catalog.popular') }}</h2>
          <div class="flex flex-wrap">
            <router-link v-for="(item, index) of getCatalogList.data"
                         :key="index"
                         :to="{ name: 'Category', params: { cat_id: item.id } }"
                         class="w-half mr-[3px] lg:mr-1 dark:bg-darkBgColor dark:text-whiteColor lg:w-fourth mb-2 bg-white p-4 rounded-2xl cursor-pointer hover:bg-mainColor hover:text-whiteColor transition-all">
              <img :src="item.icon" alt="" class="w-32 h-32 mx-auto object-contain">
              <p v-if="$i18n.locale === 'ru'" class="text-center font-semibold">{{ item.name }}</p>
              <p v-else class="text-center font-semibold">{{ item.name_kz }}</p>
            </router-link>
          </div>
        </div>
        <div>
          <div>
            <div v-for="(item, index) of getCategoriesWithProducts.data.slice(0, visibleCategoriesCount)" :key="index" class="mb-10">
              <h2 v-if="$i18n.locale === 'ru'" class="text-2xl font-semibold mb-10 dark:text-whiteColor">{{
                  item.name
                }}</h2>
              <h2 v-else class="text-2xl font-semibold mb-10 dark:text-whiteColor">{{ item.name }}</h2>
              <div class="flex overflow-x-auto">
                <ProductsList :data="item.products"/>
              </div>
            </div>
            <!-- Кнопка для открытия всех данных -->
            <button
                v-if="!showAll && visibleCategories < getCategoriesWithProducts.data.length"
                class="bg-mainColor text-whiteColor px-4 py-2 rounded-md mt-4 mx-auto block"
                @click="showAll = true">Открыть все данные
            </button>

            <!-- Кнопка для скрытия дополнительных данных -->
            <button
                v-if="showAll && visibleCategories < getCategoriesWithProducts.data.length"
                class="bg-mainColor text-whiteColor px-4 py-2 rounded-md mt-4 mx-auto block"
                @click="showAll = false">Скрыть дополнительные данные
            </button>
          </div>
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
    ...mapGetters(['getCategoriesWithProducts', 'getCatalogList']),
    visibleCategoriesCount() {
      return this.showAll ? this.getCategoriesWithProducts.data.length : this.visibleCategories;
    }
  },
  mounted() {
    this.categoriesWithProducts()
    this.catalogList()
  },
  methods: {
    ...mapActions(['categoriesWithProducts', 'catalogList'])
  },
  data() {
    return {
      openedTab: null,
      openedBlock: false,
      visibleCategories: 5, // Начальное количество отображаемых продуктов
      showAll: false, // Переменная для отслеживания открытия всех данных
    }
  }
}
</script>