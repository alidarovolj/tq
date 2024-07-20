<template>
  <div class="pt-24 lg:pt-10">
    <div class="container mx-auto px-4 lg:px-0">
      <h1 class="text-2xl font-semibold mb-10 dark:text-whiteColor">{{ $t('contacts.header') }}</h1>
      <div class="relative">
        <div class="dark:text-whiteColor">
          <div class="block lg:flex justify-between my-4">
            <div class="bg-white p-5 rounded-lg w-full lg:w-fourth dark:bg-darkBgColor mb-3 lg:mb-0">
              <p class="font-semibold text-lg mb-3">{{ $t('contacts.question') }}</p>
              <ul class="list-disc pl-4 mb-4">
                <li>{{ $t('contacts.cities.first.first') }}</li>
                <li>{{ $t('contacts.cities.first.second') }}</li>
                <li>{{ $t('contacts.cities.first.third') }}</li>
                <li>{{ $t('contacts.cities.first.fourth') }}</li>
                <li>{{ $t('contacts.cities.first.fifth') }}</li>
                <li>{{ $t('contacts.cities.first.sixth') }}</li>
                <li>{{ $t('contacts.cities.first.seventh') }}</li>
              </ul>
              <p><a class="text-mainColor" href="tel:77752453303">+7 775 245-33-03</a> Ордабек Аят</p>
            </div>
            <div class="bg-white p-5 rounded-lg w-full lg:w-fourth dark:bg-darkBgColor mb-3 lg:mb-0">
              <p class="font-semibold text-lg mb-3">{{ $t('contacts.question') }}</p>
              <ul class="list-disc pl-4 mb-4">
                <li>{{ $t('contacts.cities.second.first') }}</li>
                <li>{{ $t('contacts.cities.second.second') }}</li>
                <li>{{ $t('contacts.cities.second.third') }}</li>
                <li>{{ $t('contacts.cities.second.fourth') }}</li>
              </ul>
              <p><a class="text-mainColor" href="tel:77767131333">+7 776 713-13-33</a> Жанбиров Дамир Бауржанович</p>
            </div>
            <div class="bg-white p-5 rounded-lg w-full lg:w-fourth dark:bg-darkBgColor mb-3 lg:mb-0">
              <p class="font-semibold text-lg mb-3">{{ $t('contacts.question') }}</p>
              <ul class="list-disc pl-4 mb-4">
                <li>{{ $t('contacts.cities.third.first') }}</li>
                <li>{{ $t('contacts.cities.third.second') }}</li>
                <li>{{ $t('contacts.cities.third.third') }}</li>
                <li>{{ $t('contacts.cities.third.fourth') }}</li>
                <li>{{ $t('contacts.cities.third.fifth') }}</li>
                <li>{{ $t('contacts.cities.third.sixth') }}</li>
                <li>{{ $t('contacts.cities.third.seventh') }}</li>
                <li>{{ $t('contacts.cities.third.eighth') }}</li>
                <li>{{ $t('contacts.cities.third.ninth') }}</li>
              </ul>
              <p><a class="text-mainColor" href="tel:77071119781">+7 707 111 97 81</a> Нугман Даулет</p>
            </div>
            <div class="bg-white p-5 rounded-lg w-full lg:w-fourth dark:bg-darkBgColor mb-3 lg:mb-0">
              <p class="font-semibold text-lg mb-3">{{ $t('contacts.last_one') }}</p>
              <p><a class="text-mainColor" href="tel:77472377975">+7 747 237-79-75</a> Қасымжан Ерболсын Дауренұлы</p>
            </div>
          </div>
        </div>
<!--        <div class="absolute left-1/2 -translate-x-1/2 top-10 z-10 w-4/5">-->
<!--          <div class="container mx-auto px-0 bg-white rounded-xl">-->
<!--            <div class="p-0 lg:p-5 shadow-lg flex flex-wrap justify-between">-->
<!--              <div class="w-full lg:w-fifth mb-2 text-xs lg:mb-0 flex items-center px-4 py-2">-->
<!--                <font-awesome-icon :icon="['fas', 'phone']" class="text-white bg-green-500 p-2 rounded-full mr-3"/>-->
<!--                <div>-->
<!--                  <p class="font-semibold text-black">Телефон</p>-->
<!--                  <a class="!text-blue-500 underline hover:no-underline" href="tel:87472367503">+7 (747)-->
<!--                    236-75-03</a>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="w-full lg:w-fifth mb-2 text-xs lg:mb-0 flex items-center px-4 py-2">-->
<!--                <font-awesome-icon :icon="['fas', 'phone']" class="text-white bg-green-500 p-2 rounded-full mr-3"/>-->
<!--                <div>-->
<!--                  <p class="font-semibold text-black">Телефон</p>-->
<!--                  <a class="!text-blue-500 underline hover:no-underline" href="tel:87472367503">+7 (747)-->
<!--                    236-75-03</a>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="w-full lg:w-fifth mb-2 text-xs lg:mb-0 flex items-center px-4 py-2">-->
<!--                <font-awesome-icon :icon="['fas', 'phone']" class="text-white bg-green-500 p-2 rounded-full mr-3"/>-->
<!--                <div>-->
<!--                  <p class="font-semibold text-black">Телефон</p>-->
<!--                  <a class="!text-blue-500 underline hover:no-underline" href="tel:87472367503">+7 (747)-->
<!--                    236-75-03</a>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="w-full lg:w-fifth mb-2 text-xs lg:mb-0 flex items-center px-4 py-2">-->
<!--                <font-awesome-icon :icon="['fas', 'phone']" class="text-white bg-green-500 p-2 rounded-full mr-3"/>-->
<!--                <div>-->
<!--                  <p class="font-semibold text-black">Телефон</p>-->
<!--                  <a class="!text-blue-500 underline hover:no-underline" href="tel:87472367503">+7 (747)-->
<!--                    236-75-03</a>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="w-full lg:w-fifth mb-2 text-xs lg:mb-0 flex items-center px-4 py-2">-->
<!--                <font-awesome-icon :icon="['fas', 'phone']" class="text-white bg-green-500 p-2 rounded-full mr-3"/>-->
<!--                <div>-->
<!--                  <p class="font-semibold text-black">Телефон</p>-->
<!--                  <a class="!text-blue-500 underline hover:no-underline" href="tel:87472367503">+7 (747)-->
<!--                    236-75-03</a>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
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