<template>
  <div class="pt-24 lg:pt-10">
    <div class="container mx-auto px-4 lg:px-0">
      <h1 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Контакты компании</h1>
      <div class="relative">
        <div class="absolute left-1/2 -translate-x-1/2 top-10 z-10 w-4/5">
          <div class="container mx-auto px-0 bg-white rounded-xl">
            <div class="p-0 lg:p-5 shadow-lg flex flex-wrap justify-between">
              <div class="w-full lg:w-fifth mb-2 text-xs lg:mb-0 flex items-center px-4 py-2">
                <font-awesome-icon :icon="['fas', 'phone']" class="text-white bg-green-500 p-2 rounded-full mr-3"/>
                <div>
                  <p class="font-semibold text-black">Телефон</p>
                  <a class="!text-blue-500 underline hover:no-underline" href="tel:87472367503">+7 (747)
                    236-75-03</a>
                </div>
              </div>
              <div class="w-full lg:w-fifth mb-2 text-xs lg:mb-0 flex items-center px-4 py-2">
                <font-awesome-icon :icon="['fas', 'phone']" class="text-white bg-green-500 p-2 rounded-full mr-3"/>
                <div>
                  <p class="font-semibold text-black">Телефон</p>
                  <a class="!text-blue-500 underline hover:no-underline" href="tel:87472367503">+7 (747)
                    236-75-03</a>
                </div>
              </div>
              <div class="w-full lg:w-fifth mb-2 text-xs lg:mb-0 flex items-center px-4 py-2">
                <font-awesome-icon :icon="['fas', 'phone']" class="text-white bg-green-500 p-2 rounded-full mr-3"/>
                <div>
                  <p class="font-semibold text-black">Телефон</p>
                  <a class="!text-blue-500 underline hover:no-underline" href="tel:87472367503">+7 (747)
                    236-75-03</a>
                </div>
              </div>
              <div class="w-full lg:w-fifth mb-2 text-xs lg:mb-0 flex items-center px-4 py-2">
                <font-awesome-icon :icon="['fas', 'phone']" class="text-white bg-green-500 p-2 rounded-full mr-3"/>
                <div>
                  <p class="font-semibold text-black">Телефон</p>
                  <a class="!text-blue-500 underline hover:no-underline" href="tel:87472367503">+7 (747)
                    236-75-03</a>
                </div>
              </div>
              <div class="w-full lg:w-fifth mb-2 text-xs lg:mb-0 flex items-center px-4 py-2">
                <font-awesome-icon :icon="['fas', 'phone']" class="text-white bg-green-500 p-2 rounded-full mr-3"/>
                <div>
                  <p class="font-semibold text-black">Телефон</p>
                  <a class="!text-blue-500 underline hover:no-underline" href="tel:87472367503">+7 (747)
                    236-75-03</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <iframe
            frameborder="0"
            height="550"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5ee7683d606eed7cad6e296f7daf3b7b2a1fb00db330f9fe70dd0100eb5b348e&amp;source=constructor"
            width="100%"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";

export default {
  name: "AboutPage",
  setup() {
    useMeta({title: "Контакты"});
  },
}
</script>